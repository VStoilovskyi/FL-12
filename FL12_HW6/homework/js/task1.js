const a = + prompt('Enter value#1').trim();
const b = + prompt('Enter value#2').trim();
const c = + prompt('Enter value#3').trim();

if ( a === 0 || a === '' || b === '' || c === '' ||isNaN(a) || isNaN(b) || isNaN(c)) {

    console.log('Values are invalid \n Please, try again');
} else {
    const d =  b * b - 4 * a * c;
    if (d === 0) {
        const x = -b / (2 * a);
        console.log(`x = ${x}`);
    } else if (d < 0) {
        console.log('no solution found')
    } else {
        const x1 = (-b + Math.sqrt(d)) / (2 * a);
        const x2 = (-b - Math.sqrt(d)) / (2 * a);
        console.log(`x1 = ${x1} and x2 = ${x2}`);
    }
}