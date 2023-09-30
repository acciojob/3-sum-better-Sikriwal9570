function threeSumClosest(nums, target) {
    if (nums.length < 3) {
        return null; // Not enough elements to form a triplet
    }

    nums.sort((a, b) => a - b); // Sort the array in ascending order
    let closestSum = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];

            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closestSum;
}

