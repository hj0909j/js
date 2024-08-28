// admin을 입력하면 pss를 물어봄, TheMaster-> 환영합니다 or 실패, 빈문자열, 취소 -> 취소
let pss = prompt("login",);

if(pss == "Admin"){
    let pw = prompt("Password?", );
    if(pw == "TheMaster"){
        alert("Welcome!");
    }else if(pw == "" || pw == null){
        alert("Cancled");
    }else{
        alert("Wrong password");
    }
}else if(pss == "" || pss == null){
    alert("Cancled");
}else{
    alert("I don't know you");
}