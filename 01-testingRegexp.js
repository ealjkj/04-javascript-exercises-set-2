let word, regexp;
// a
regexp = /.abc/;
word = 'jabc'; 
console.log('a:', regexp.test(word));

// b
regexp = /a+b?!!1{4}/;
word = 'ab!!1111';
console.log('b:',regexp.test(word));

// c
regexp = /.{3}a\.b/;
word = 'abca.b';
console.log('c:',regexp.test(word));

// d
regexp = /\w/;
word = 'a';
console.log('d:',regexp.test(word));

// e
regexp = /\s/;
word = '\n';
console.log('e:',regexp.test(word));

// f
regexp = /\d/;
word = '1';
console.log('f:',regexp.test(word));

// g
regexp = /./;
word = 'a';
console.log('g:',regexp.test(word));

// h
regexp = /[abc]/;
word = 'b';
console.log('h:',regexp.test(word));

// i
regexp = /(abc)/;
word = 'abc';
console.log('i:',regexp.test(word));

// j
regexp = /[a-zA-Z_\$\.]+[A-Za-z_\$0-9\.]*@[a-zA-Z_\$\.]+[a-zA-Z_\$0-9\.]*\.(com|net|org){1}/;
word = 'jorch@gmail.com';
console.log('j:',regexp.test(word));

// k
regexp = /\([0oOn]{1}(_|\s)[0oOn]{1}\)/;
word = '(o_o)';
console.log('k:',regexp.test(word));