const fs = require('fs'); //require file system 
const path = require('path');
const dirPath = path.join(__dirname);
console.warn("directory path = "+dirPath);

for(let i = 0; i < 5; i++){
    fs.writeFileSync('hello'+i+'.txt', 'this is apple file');
    // fs.writeFileSync(`apple${i}.txt`,'this is apple file');
    // var filePath = `F:/NodeJs/files/hello${i}.txt`; 
    // fs.unlinkSync(filePath);
}
// console.log(filePath)

fs.readdir(dirPath, (err, files) =>{
    // console.warn(files); //show files in list of array
    files.forEach((item)=>{
        console.warn(item);
    })
})



