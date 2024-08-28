//반복문으로 자기보다 작은것을 나누었을때 나머지가 0이 되지 않으면 출력

let num = prompt("write random num then print prime number",);

nextPrime:
for(let i = 2; i<=num;i++){

    for(let j = 2; j<i; j++){
        if(i%j ==0) continue nextPrime; //소수가 아닐때 nextPrime으로 감
    }
    alert(i);
}