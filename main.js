
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const toArr = cleanedStr.split('');
    const reversedStr = toArr.reverse();
    const toStr = reversedStr.join('');


    return cleanedStr === toStr;


}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Was it a car or a cat I saw?")); // true
console.log(isPalindrome("Hello, World!"));