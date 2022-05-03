function shiftCharacter(c) {
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let isCapital = (c === c.toUpperCase());
    c = c.toUpperCase();
    let index = abc.indexOf(c) 

    if(index !== -1) {
        return isCapital ? abc[(index  + 1) % abc.length] : abc[(index  + 1) % abc.length].toLowerCase(); 
    } else if (!Number.isNaN(parseInt(c))) {
        return ((parseInt(c) + 1)%10).toString();
    }
    return isCapital ? c : c.toLowerCase(); 
}

function shift(string) {
    return string.replace(/([a-z]|\d)/gi, (value) => {
        return shiftCharacter(value);
    });   
}

console.log(shift('aBc'));
console.log(shift('xyz'));
console.log(shift('aK89'));


