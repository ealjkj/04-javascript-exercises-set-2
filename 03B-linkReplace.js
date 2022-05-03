let textbox = document.getElementById("selection-textbox");
let btn = document.getElementById("selection-button");
let textElement = document.getElementById("main-text");
let currentString;


btn.addEventListener("click", function getLink(e) {
    let string = textbox.value;
    let regexp = RegExp(`\\b(${string})\\b`, 'i');
    if(currentString) {
        let regexpForCurrent = RegExp(`<a href="https://twitter.com/search\\?q=${currentString}&amp;src=typed_query">#${currentString}</a>`, 'i');
        console.log(textElement.innerHTML, textElement.innerHTML.match(regexpForCurrent));
        textElement.innerHTML = textElement.innerHTML.replace(regexpForCurrent,  currentString);
    } 
    textElement.innerHTML = textElement.innerHTML.replace(regexp, `<a href="https://twitter.com/search?q=$1&src=typed_query">#$1</a>`); 
    currentString = string;
})

