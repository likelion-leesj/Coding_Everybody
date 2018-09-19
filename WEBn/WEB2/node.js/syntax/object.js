var members = ['egoing', 'k8805', 'hoya'];
console.log(members[1]);
var i = 0;
while(i < members.length){
    console.log('array loop',members[i]);
    i++;
}

var roles = {
    'programmer':'egoing',
    'designer' : 'k8805',
    'manager' : 'hoya'
};

// 배열은 순서가 있고 객체는 이름을 준다. 

console.log(roles.designer);
console.log(roles['designer']);

for(var name in roles){
    console.log('object =>', name, 'value => ', roles[name]);
}
// 변수 in 객체의 변수를 통해서는 키값을 받아온다. 