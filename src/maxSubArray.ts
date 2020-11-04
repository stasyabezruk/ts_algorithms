const maxSubArray = (nums: number[]): number => {
    let sum = nums[0]; // current sum
    let max = nums[0]; // max sum
    let ptr = 1; // pointer
    
    while(ptr < nums.length) {
        sum = Math.max(nums[ptr], sum + nums[ptr]);
        max = Math.max(max, sum);
        ptr += 1;
    }

    return max;
}

const arr1 = [-2,1,-3,4,-1,2,1,-5,4];
const arr2 = [1];
const arr3 = [0];
const arr4 = [-1];
const arr5 = [1, 5, -7, 4, 2, 1]; //7

console.log(maxSubArray(arr1));
console.log(maxSubArray(arr2));
console.log(maxSubArray(arr3));
console.log(maxSubArray(arr4));
console.log(maxSubArray(arr5));