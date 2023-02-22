const fs = require('fs'); //require file system 
const path = require('path');
const dirPath = path.join(__dirname);
// console.warn("directory path = "+dirPath);


// //Blocking, Synchronous way ( reading File )
// const  textIn = fs.readFileSync('./input.txt', 'utf-8');
// console.log(textIn);
// const textOut = `This is what we know about the file system: ${textIn}. \n Created on ${Date.now()}`;
// fs.writeFileSync('./output.txt', textOut);
// console.log('File Written!');


//Non-Blocking, asynchronous way ( reading File )
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    if(err) {
        console.log("Error!");
        return ;
    }

    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
            console.log(data3);

            fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, (err) => {
                console.log("Your file has been written.")
            });
        });
    });
});
console.log('Will read file!');




// for(let i = 0; i < 5; i++){
//     fs.writeFileSync('hello'+i+'.txt', 'this is apple file');
//     // fs.writeFileSync(`apple${i}.txt`,'this is apple file');
//     // var filePath = `F:/NodeJs/files/hello${i}.txt`; 
//     // fs.unlinkSync(filePath);
// }
// // console.log(filePath)

// fs.readdir(dirPath, (err, files) =>{
//     // console.warn(files); //show files in list of array
//     files.forEach((item)=>{
//         console.warn(item);
//     })
// })



