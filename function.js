// function checkAge(age){
//     return (age > 18)? true : confirm('asdfa');
// }

// function min(a, b){
//     return a < b ? a : b;
// }

//x의 n제곱을 반환해주는 함수, pow(x,n)를 만들어보세요. x의 n 제곱은 x를 n번 곱해서 만들 수 있습니다.

function pow(x,n){
    
    let result = x;

    for (let i = 1; i<n; i++){
        result *= x;
    }
    return result;
}

let x = prompt('num1', );
let n = prompt('num2', );
if(n<1){
    n = prompt('over 1 num',);
} alert(pow(x,n));