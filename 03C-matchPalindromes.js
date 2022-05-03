function matchPalindromes(string) {
    let arr = string.split(' ');
    return arr.filter(word => {
        let k = Math.floor(word.length/2);
        let str = '(\\w)'.repeat(k) + '.?';
        for(let i = k; i > 0 ; i--){
            str = str + '\\' + i.toString();
        }
        let regexp = RegExp(str, 'i');
        return regexp.test(word);
    });
}

console.log(matchPalindromes('The civic rights of Ms Anna were not on my radar madam. I will refer you to the kayak owner to check the level of the ocean again'));