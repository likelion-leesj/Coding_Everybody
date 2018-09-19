// var v1 = 'v1';
// var v2 = 'v2';
// // 이 변수들이 수천 수만개 라고 생각해보자

var p = {
    v1:'v1',
    v2:'v2',
    // f1: function (){
    //     console.log(o.v1);
    // },
    f1: function (){
        console.log(this.v1);
    },
    f2: function (){
       console.log(this.v2);
    }
}
// 함수 안에서 본인을 호출하고 싶을때 자바스크립트에서는 this 라는것을 쓴다. 객체는 코드의 복잡성을 낮추는데 쓰일수 있다. 
// function f1(){
//     console.log(o.v1);
// }

// function f2(){
//     console.log(o.v2);
// }

// f1();
// f2();

// o.f1();
p.f1();
p.f2();