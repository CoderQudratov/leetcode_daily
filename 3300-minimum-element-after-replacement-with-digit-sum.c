#include <stdio.h>
//https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum
int minElement(int *arr, int size) {

  int count = 0;
  int min = arr[0];
  for (int i = 0; i < size; i++) {

    int diget = 0;
    int n = arr[i];
    while (n > 0) {
      diget += n % 10;
      n /= 10;
      //find all numbers
    }
    if (diget < min) {
      min = diget;
      //find min number
    }
  }

  return min;
}
int main() {
  int nums[4] = {10, 12, 13, 14};
  int numsSize = sizeof(nums) / sizeof(nums[0]);
  printf("%d\n", minElement(nums, numsSize));
  return 0;
}