function compile (instructions: string[]): number {
	let instructionNumber = 0;
	const registers: Record<string, number> = {};
	
   const getValue = (x: string): number => isNaN(Number(x)) ? (registers[x] ?? 0) : Number(x);
  
	const move = (x, y) => {
	  registers[y] = getValue(x);
	}
	const increment = (x) => {
	   registers[x] = (registers[x] ?? 0) + 1;
	}
	const decrement = (x) => {
	   registers[x] = (registers[x] ?? 0) - 1;
	}
	const jump = (x,y) => {
	  if (getValue(x) === 0) {
		instructionNumber = Number(y) - 1;
	  }
	}
	
	while (instructionNumber < instructions.length) {   
	  const [cmd, arg1, arg2] = instructions[instructionNumber].trim().split(/\s+/);
	  if (cmd === 'MOV') {
		move(arg1, arg2);
	  } else if (cmd === 'INC') {
		increment(arg1);
	  } else if (cmd === 'DEC') {
		decrement(arg1);
	  } else if (cmd === 'JMP') {
		jump(arg1, arg2);
	  }
	  instructionNumber++;
	}
	return registers['A'] ?? undefined
  }
  
  /*
  MOV x y: Copia el valor x (puede ser un número o el contenido de un registro) en el registro y
  INC x: Incrementa en 1 el contenido del registro x
  DEC x: Decrementa en 1 el contenido del registro x
  JMP x y: Si el valor del registro x es 0 entonces salta a la instrucción en el índice y y sigue ejecutándose el programa desde ahí.
  */
  
  const instructions = [
	'MOV -1 C', // copia -1 al registro 'C',
	'INC C', // incrementa el valor del registro 'C'
	'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
	'MOV C A', // copia el registro 'C' al registro 'a',
	'INC A' // incrementa el valor del registro 'a'
  ]
  
  compile(instructions) // -> 2
  
  /**
   Ejecución paso a paso:
   0: MOV -1 C -> El registro C recibe el valor -1
   1: INC C    -> El registro C pasa a ser 0
   2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
   1: INC C    -> El registro C pasa a ser 1
   2: JMP C 1  -> C es 1, ignoramos la instrucción
   3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
   4: INC A    -> El registro A pasa a ser 2
   */