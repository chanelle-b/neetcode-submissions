class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let lowerCases = s.toLowerCase().replace(/[^a-z0-9]/g,"")
        let left = 0;
        let right = lowerCases.length -1;

        while (left < right) {

            if(lowerCases[right] != lowerCases[left]){
                return false;
            }
            left++
            right--
           
        }
 return true;
        
    }
    
}
