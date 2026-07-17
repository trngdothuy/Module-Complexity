/**
 * Find if there is a pair of numbers that sum to a given target value.
 *
 * Time Complexity:
 * Space Complexity:
 * Optimal Time Complexity:
 *
 * @param {Array<number>} numbers - Array of numbers to search through
 * @param {number} target - Target sum to find
 * @returns {boolean} True if pair exists, false otherwise
 */
export function hasPairWithSum(numbers, target) {
  const seen = new Set()

  for (const number of numbers) {
      const complement = target - number

      if (seen.has(complement)) {
        return true;
      }
      seen.add(number)
  }
  return false;
}
