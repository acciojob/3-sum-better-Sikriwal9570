function threeSum(S, target) {
  // Sort the array in ascending order
  S.sort((a, b) => a - b);

  let closestSum = Infinity;
  let closestDiff = Infinity;

  for (let i = 0; i < S.length - 2; i++) {
    let left = i + 1;
    let right = S.length - 1;

    while (left < right) {
      const currentSum = S[i] + S[left] + S[right];
      const currentDiff = Math.abs(currentSum - target);

      if (currentDiff < closestDiff) {
        closestDiff = currentDiff;
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

// Example usage:
const S = [-1, 2, 1, -4];
const target = 1;
const closestSum = threeSum(S, target);
console.log(closestSum); // Output: 2
