let textbox = document.getElementById("selection-textbox");
let btn = document.getElementById("selection-button");
let textElement = document.getElementById("main-text");
let mainString = textElement.textContent;
btn.addEventListener("click", function getLink(e) {
    let string = textbox.value;
    let regexp = RegExp(`\\b(${string})\\b`, 'i');
    textElement.innerHTML = mainString.replace(regexp, `<a href="https://twitter.com/search?q=$1&src=typed_query">#$1</a>`); 
});

