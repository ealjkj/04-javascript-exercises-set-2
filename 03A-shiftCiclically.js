'use-strict';
function shiftCharacter(c) {
    if(c === 'z') return 'a';
    if(c === 'Z') return 'A';
    if(c === '9') return '0';
    return String.fromCharCode(c.charCodeAt(0) + 1); 
}

console.log(shiftCharacter('a'));

function shift(string) {
    return string.replace(/[a-z\d]/gi, (value) => {
        return shiftCharacter(value);
    });   
}

console.log(shift('aBc'));
console.log(shift('xyz'));
console.log(shift('aK89'));
