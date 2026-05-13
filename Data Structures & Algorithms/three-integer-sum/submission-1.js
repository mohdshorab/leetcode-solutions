class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a,b)=> a-b);
        const solutionArr = [];
        for(let i =0; i< nums.length; i++){
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            // A + B + C = 0
            // so here we have the final result 0, and A as nums[i]
            // need to find the B+C = -1 * A
            // If found u have A,B,C and then store the indexes.
            let left = i+1, right = nums.length -1;
            while(left< right){
                if(nums[left]+nums[right] === -1 * nums[i] ){
                    solutionArr.push([nums[i], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if(nums[left]+nums[right] > -1 * nums[i] ){
                    right--;
                } else left++;
            }
        }
        return solutionArr;
    }
}
