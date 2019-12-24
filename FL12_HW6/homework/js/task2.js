const a = + prompt('Enter value#1').trim();
const b = + prompt('Enter value#2').trim();
const c = + prompt('Enter value#3').trim();

if ( !parseInt(a) || !parseInt(b) || !parseInt(c) ) {
   console.log('input values should only be numbers');
} else if ( a <= 0 || b <= 0 || c <= 0  ) {
    console.log('Numbers must be positive');
} else {
    if ( a + b <= c || a + c <= b || b + c <= a ) {
        console.log('Triangle cannot exist');
    } else if (a !== b && b !== c && a !== c) {
        console.log('Scalene triangle');
    } else if (a === c && a === b) {
        console.log('Equilateral triangle');
    } else {
        console.log('Isosceles triangle');
    }
}