const a = + prompt('Enter value#1').trim();
const b = + prompt('Enter value#2').trim();
const c = + prompt('Enter value#3').trim();

if ( !parseInt(a) || !parseInt(b) || !parseInt(c) ) {
   alert('input values should be ONLY numbers');
} else if ( a <= 0 || b <= 0 || c <= 0  ) {
    alert('A triangle must have 3 sides with a positive definite length');
} else {
    if ( a + b <= c || a + c <= b || b + c <= a ) {
        console.log('Triangle cannot exist');
    } else if (a === c && a === b) {
        console.log('Equilateral triangle');
    } else if (a !== b && b !== c && a !== c) {
        console.log('Scalene triangle');
    } else {
        console.log('Isosceles triangle');
    }
}