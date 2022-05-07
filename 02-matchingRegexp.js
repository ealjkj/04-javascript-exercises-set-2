let regexp, tests;
function toDo(regexp, word) {
    return ': ' + word.match(regexp);
}
// A
regexp = /^((jaun|febru)ary|march|april|may|ju(ne|ly)|august|october|(nov|dec|sept)ember) \d{2}, \d{4}$/gi;
tests = ['September 29, 1972', 'February 99, 0001', 'June 04, 3000'];

console.log('A. Date format:')
tests.forEach(element => console.log(element, toDo(regexp, element)));
console.log('\n');


// B
regexp = /^([a-zA-Z]\d+|\d+[a-zA-Z])$/g;
tests = ['A52', 'd747', '27X', 'v2'];

console.log('B. Letter followed or preceded by a number:')
tests.forEach(element => console.log(element, toDo(regexp, element)));
console.log('\n');


// C
regexp = /^[a-zA-Z]+\.(txt|java|cpp)$/g;
tests = ['test.java', 'program.cpp', 'newReport.txt'];

console.log('C. txt, java, and cpp files with names consisting of only letters')
tests.forEach(element => console.log(element, toDo(regexp, element)));
console.log('\n');


// D
regexp = /(.)(.).\2\1/g;
tests = ['abcba', '12321', '_1a1_'];

console.log('D. A 5 character palindrome')
tests.forEach(element => console.log(element, toDo(regexp, element)));
console.log('\n');


// E
regexp = /\b[b-y]+\b/gi;
tests = ['Bee zapp Crow Eagle Zorro  mouse Ape  you'];

console.log('E. All words that consist of letters from b to y only')
tests.forEach(element => console.log(element, toDo(regexp, element)));
console.log('\n');


// F
regexp = /<(\w+)>.*?<\/\1>/gi;
tests = ['Is <b>4 < -1/12</b> true? The <b>answer</b> will <em>surprise</em> you.'];

console.log('F. All the non nested tag elements in a string')
tests.forEach(element => console.log(element, toDo(regexp, element)));
console.log('\n');