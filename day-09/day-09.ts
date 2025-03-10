type Board = string[]
type Movement = 'U' | 'D' | 'R' | 'L'
type Result = 'none' | 'crash' | 'eat'

function moveTrain(board: Board, mov: Movement): Result {
  const newBoard = board.map(line => line.split(''))
  let headPos = {x: -1, y: -1}
  for (let i = 0; i < newBoard.length; i++) {
    for (let j = 0; j < newBoard[i].length; j++) {
      if (newBoard[i][j] === '@') {
        headPos = {x: j, y: i};
        break;
      }
    }
    if (headPos.x >= 0) break;
  }
  let result: Result = 'none'
  switch (mov) {
    case 'U':
      if (headPos.y === 0) result = 'crash'
      else if (newBoard[headPos.y-1][headPos.x] === '*') result = 'eat'
      else if (newBoard[headPos.y-1][headPos.x] === 'o') result = 'crash'
      break;
    case 'D':
      if (headPos.y === newBoard.length - 1) result = 'crash'
      else if (newBoard[headPos.y+1][headPos.x] === '*') result = 'eat'
      else if (newBoard[headPos.y+1][headPos.x] === 'o') result = 'crash'
      break;
    case 'L':
      if (headPos.x === 0) result = 'crash'
      else if (newBoard[headPos.y][headPos.x-1] === '*') result = 'eat'
      else if (newBoard[headPos.y][headPos.x-1] === 'o') result = 'crash'
      break;
    case 'R':
      if (headPos.x === newBoard[0].length - 1) result = 'crash'
      else if (newBoard[headPos.y][headPos.x+1] === '*') result = 'eat'
      else if (newBoard[headPos.y][headPos.x+1] === 'o') result = 'crash'
      break;
  }
  return result;
}