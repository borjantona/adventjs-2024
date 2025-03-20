/**
 * @param {string} s
 * @returns {string}
 */
function removeSnow(s: string): string {
  let isSnowTogether = false;
  let sArr = s.split("");
  let result: string[] = [];
  while (sArr.length > 0) {
    if (sArr.length === 1) {
      result.push(sArr.pop());
      break;
    }
    if (sArr[sArr.length - 1] === sArr[sArr.length - 2]) {
      isSnowTogether = true;
      sArr.pop();
      sArr.pop();
    } else {
      result.push(sArr.pop());
    }
  }
  if (isSnowTogether) return removeSnow(result.reverse().join(""));
  return result.reverse().join("");
}

removeSnow("zxxzoz"); // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

removeSnow("abcdd"); // -> "abc"
// 1. Eliminamos "dd", quedando "abc"

removeSnow("zzz"); // -> "z"
// 1. Eliminamos "zz", quedando "z"

removeSnow("a"); // -> "a"
// No hay montículos repetidos
