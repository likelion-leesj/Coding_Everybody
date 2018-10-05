var fs = require('fs');

//readFileSync
// console.log('A');
// var result = fs.readFileSync('syntax/sample.txt','utf-8');
// console.log(result);
// console.log('C');


//node.js 는 비동기적인 방식을 더 선호한다? << 디폴트이다?
// 리드파일은 리턴값을 주지 않는다? 
console.log('A');
fs.readFile('syntax/sample.txt','utf-8', function(err, result){
    console.log(result);
});
console.log('C');
// 함수안의 코드를 읽고 실행하기전에 그아래코드가 먼저 실행된다? 
