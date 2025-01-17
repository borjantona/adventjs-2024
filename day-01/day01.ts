function prepareGifts(gifts: number[]): number[] {
  function removeDuplicates(arr: number[]): number[] {
    const result: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      const value = arr[i];
      if (i === arr.indexOf(value)) {
        result.push(value);
      } else {
        continue;
      }
    }
    return result;
  }

  const giftsVal = [...gifts];
  giftsVal.sort((a, b) => a - b);

  return removeDuplicates(giftsVal);
}
