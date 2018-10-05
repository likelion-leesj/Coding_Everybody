var args = process.argv;
console.log(args[2]);
// 결과값의 1번은 자바스크립트의 런타임의 위치, 2번은 현재파일의 위치, 3번은 본인이 입력한값 띄어쓰기하면 4번 5번등으로 계속 나온다
console.log('A');
console.log('B');
if(args[2]==='1'){
console.log('C1');
} else {
console.log('C2');
}
console.log('D');