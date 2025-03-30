function findMissingNumbers(nums: number[]): number[] {
	nums.sort();
	const result = new Set<number>();
	for (let i = 1; i < nums[nums.length - 1]; i++) {
	  if (!nums.includes(i)) {
		result.add(i);
	  }
	}
	return Array.from(result);
  }
  
  findMissingNumbers([1, 2, 4, 6]);
  // [3, 5]
  
  findMissingNumbers([4, 8, 7, 2]);
  // [1, 3, 5, 6]
  
  findMissingNumbers([3, 2, 1, 1]);
  // []
  
  findMissingNumbers([5, 5, 5, 3, 3, 2, 1]);
  // [4]
  