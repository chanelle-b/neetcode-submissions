class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //declare map
        const map = new Map()
        //loop through nums, declare a diff variable
        //the difference is our target number - a num[i] in array
        for (let i = 0; i < nums.length; i++){
            const diff = target - nums[i]

        // if our map has a number that matches the difference, return the 
        if (map.has(diff)){
            return [map.get(diff),i]
        } else {
            map.set(nums[i],i)
        }
        }
        
    }

    }