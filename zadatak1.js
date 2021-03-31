var ex0 = 'Globalna promenjiva kao';
// U celom kodu je dostupna ova promenjiva..

function fun1() {
    console.log(ex0);
    var ex4 = 'Iz funkcije!';
};

fun1();

console.log(ex4);  // <== Nemoguce pronaci varijablu, definisana je samo u funkciji!

for (let i = 0; i < 5; i++) {
    var ex1 = 'Variable with var';
    let ex2 = 'Variable with let';
}

console.log(ex1); // var promenjiva je dostupna i van bloka.
console.log(ex2); // let promenjiva je dostupna samo u okviru bloka.


// U funkciji definisana varijabla nije vidljiva van funkcije nikad.
// U bloku definisana varijabla je vidljiva ako je definisana sa var,
// a nije vidljiva ako je definisana sa let
console.log('Logging test!');
