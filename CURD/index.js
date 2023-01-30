const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname);
const filePath = `${dirPath}/apple.txt`

// //***** create file *****/
// fs.writeFileSync(filePath,"this is simple text file")


// //***** read file *****/
// fs.readFile(filePath, 'utf8', (err, item) =>{
//     console.log(item);
// })


// //***** update file *****/
// fs.appendFile(filePath, 'file is updated',(err) =>{
//     if(!err){
//         console.log("file is updated");
//     }
// })


//***** rename file *****/
fs.rename(filePath,`${dirPath}/hello.txt`, (err)=>{
    if(!err){
        console.log("filename is renamed");
    }
})


//***** delete file *****/
console.warn(dirPath);