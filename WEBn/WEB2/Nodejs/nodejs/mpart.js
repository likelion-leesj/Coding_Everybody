var M = {
    v:'v',
    f:function(){
        console.log(this.v);
    }
}

module.exports = M;
//  위코드가 뜻하는것은 여기 mpart.js 에 있는 M 이라는 객체를 이모듈 밖에서 사용할수있게 해주겠다. 