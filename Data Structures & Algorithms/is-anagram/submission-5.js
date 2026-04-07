class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        };
        const sArr = s.split('').sort().join('');
        const tArr = t.split('').sort().join('');
        if (sArr === tArr) return true;
        return false;
    }
}
