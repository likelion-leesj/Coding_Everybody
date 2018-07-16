// function a(){
//     console.log('A');
// }
var a = function (){
    console.log('A');
}
// a();

//위 함수와 아래 함수가 같다. 
// 아래에서 보듯이 a의 값이 함수이다 
// 자바스크립트는 함수가 값이다...?

function slowfunc(callback){
    callback();
}
slowfunc(a);
//함수가 끝났으니 다음걸 실행해라 >> 인자로 callback을 받아주면된다.