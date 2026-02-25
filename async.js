let a = 1;
let b = 2;

setTimeout(function() {
    console.log('timeout: ' + a);
}, 100);

a = 10;

fetch('https://api.github.com').then(function() {
    console.log('Fetch');
});

console.log('Synchronous');

console.log(a);
console.log(b);

