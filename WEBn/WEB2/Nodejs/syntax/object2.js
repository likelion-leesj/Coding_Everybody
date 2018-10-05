// 함수는 구문이면서 변수로도 사용할수 있다. 

var f = function f1(){
    console.log(1+1);
    console.log(1+2);   
}
console.log(f);
f();

var a =[f];
// 객체에 f를 넣어서 이것을 a 로 이름 짓다 
a[0]();
// 

var o = {
    func:f
}
o.func();
//  위의 방법처럼 함수를 이름으로 불러서 쓸수있다. 

// var i = if(true){console.log(1)};

// var w = while(true){consolelog(1)};

// 조건문과 반복문은 변수가 될 수 없다.  