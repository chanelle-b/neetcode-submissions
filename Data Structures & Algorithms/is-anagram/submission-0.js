class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        
        
        const table = {}

        if (s.length !== t.length){
            return false;
        }

        for (let i = 0; i < s.length; i++){
            const charS = s[i];

            if (!table[charS]) {
                table[charS] = 1
            }else{
                table[charS]++
            }
        }

        for (let i = 0; i < t.length; i++){
            const charT = t[i];

            if (table[charT] === undefined || table[charT] < 0){
                return false;
            }

            if (table[charT]<1){
                return false;
            }

            table[charT]--
        }
        return true;
    }

}
