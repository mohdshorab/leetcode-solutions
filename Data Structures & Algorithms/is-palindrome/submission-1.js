class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // Two Pointer Approach
        // const cleanS = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        // let l = 0, r = cleanS.length-1;
        // while(l<r){
        //     if(cleanS[l].toLowerCase() !== cleanS[r].toLowerCase()) return false;
        //     l++;
        //     r--;
        // }
        // return true;
        const cleanS = s.toLowerCase().replace(/[^a-z0-9]/g, '').split('');
        if(cleanS.length === 1) return true
        const reversedS = [...cleanS].reverse().join();
        const newS = [...cleanS].join();
        return  reversedS === newS;
    }
}
