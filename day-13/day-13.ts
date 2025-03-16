function isRobotBack(moves: string): true | [number, number] {
	const movementsAllowed = ['R', 'L', 'U', 'D'];
	const invertedMovements: Record<string, string> = {
	  'L': 'R',
	  'R': 'L',
	  'U': 'D',
	  'D': 'U'
	};
	const deltas: Record<string, { x: number; y: number }> = {
	  'R': { x: 1, y: 0 },
	  'L': { x: -1, y: 0 },
	  'D': { x: 0, y: -1 },
	  'U': { x: 0, y: 1 }
	};
	const robotPos = {
	  x: 0,
	  y: 0
	}
	const translateMovements = (movements: string): string[] => {
	  const translatedMovements = [];
	  const movs = movements.split('')
	  for (let i = 0; i < movs.length; i++) {
		if (!movementsAllowed.includes(movs[i])) {
		  switch (movs[i]) {
			case '*':
			  movs[i] = movs[i+1];
			  translatedMovements.push(movs[i]);
			  break;
			case '!':
			  movs[i+1] = invertedMovements[movs[i+1]]
			  break;
			case '?':
			  if (translatedMovements.includes(movs[i+1])) {
				movs.splice(i+1, 1);
			  }
			  break;
		  }  
		} else {
		translatedMovements.push(movs[i]);
		}
	  }
	  return translatedMovements;
	}
	const newMoves = translateMovements (moves);
	for (let j = 0; j < newMoves.length; j++) {
	  robotPos.x += deltas[newMoves[j]].x;
	  robotPos.y += deltas[newMoves[j]].y;
	}
	return (robotPos.x === 0 && robotPos.y === 0) || [robotPos.x, robotPos.y]
  }
  
  
  isRobotBack('R')     // [1, 0]
  isRobotBack('RL')    // true
  isRobotBack('RLUD')  // true
  isRobotBack('*RU')   // [2, 1]
  isRobotBack('R*U')   // [1, 2]
  isRobotBack('LLL!R') // [-4, 0]
  isRobotBack('R?R')   // [1, 0]
  isRobotBack('U?D')   // true
  isRobotBack('R!L')   // [2,0]
  isRobotBack('U!D')   // [0,2]
  isRobotBack('R?L')   // true
  isRobotBack('U?U')   // [0,1]
  isRobotBack('*U?U')  // [0,2]
  isRobotBack('U?D?U') // true
  
  // Ejemplos paso a paso:
  isRobotBack('R!U?U') // [1,0]
  // 'R'  -> se mueve a la derecha 
  // '!U' -> se invierte y se convierte en 'D'
  // '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'
  
  isRobotBack('UU!U?D') // [0,1]
  // 'U'  -> se mueve arriba
  // 'U'  -> se mueve arriba
  // '!U' -> se invierte y se convierte en 'D'
  // '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'