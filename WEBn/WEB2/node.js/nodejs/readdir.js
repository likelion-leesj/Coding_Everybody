var testFolder = './data';
// 실행하는 위치(bash 창의 현재 폴더위치)를 기준으로 data폴더의 경로를 적어준다. 
var fs = require('fs');

fs.readdir(testFolder, function(err, filelist){
  console.log(filelist);
})
