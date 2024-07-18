class Solution {
  public int[] findTwoSum(int[] numbers, int sum) {
      int length = numbers.length;
      
      for (int gap = 1; gap < length; gap++) {
          for (int right = gap; right < length; right++) {
              int left = right - gap;
              if (numbers[left] + numbers[right] == sum) {
                  return new int[] {left, right};
              }
          }
      }
      
      return new int[0]; // Return empty array if no solution found
  }
}