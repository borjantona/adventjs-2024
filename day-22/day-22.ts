function generateGiftSets(gifts: string[]): string[][] {
  const result: string[][] = [];
  function combine(
    toys: string[],
    size: number,
    start: number,
    combination: string[],
    result: string[][]
  ) {
    if (combination.length === size) {
      result.push([...combination]);
      return;
    }

    for (let i = start; i < toys.length; i++) {
      combination.push(toys[i]);
      combine(toys, size, i + 1, combination, result);
      combination.pop();
    }
  }

  for (let size = 1; size <= gifts.length; size++) {
    combine(gifts, size, 0, [], result);
  }

  return result;
}
