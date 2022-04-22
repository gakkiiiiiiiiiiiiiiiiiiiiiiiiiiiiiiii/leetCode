/**
 * @param {number[]} nums
 * @return {number}
 */

// 暴力解法，会超时
export var maxRotateFunction = function (nums) {
	let max = -Infinity;
	let length = nums.length;
	for (let i = 0; i < length; i++) {
		let sum = 0;
		nums.forEach((item, index, arr) => {
			// 0 1 2 3 0 1 2 3
			// 1 2 3 0
			// 2 3 0 1
			// 3 0 1 2
			let currentIndex = i + index;
			sum += index * arr[currentIndex > length - 1 ? currentIndex - length : currentIndex];
		});
		max = max > sum ? max : sum;
	}

	return max;
};
