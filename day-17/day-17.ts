function detectBombs(grid: boolean[][]): number[][] {
  function create2DArray(m, n) {
    return Array.from({ length: m }, () => Array.from({ length: n }, () => 0));
  }
  const output: number[][] = create2DArray(grid.length, grid[0].length);
  const deltas = [
    { x: 0, y: -1 },
    { x: 1, y: -1 },
    { x: 1, y: 0 },
    { x: 1, y: 1 },
    { x: 0, y: 1 },
    { x: -1, y: 1 },
    { x: -1, y: 0 },
    { x: -1, y: -1 },
  ];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      let bombs = 0;
      for (const delta of deltas) {
        if (grid[i + delta.x] && grid[i + delta.x][j + delta.y]) {
          bombs++;
        }
      }
      output[i][j] = bombs;
    }
  }

  return output;
}
