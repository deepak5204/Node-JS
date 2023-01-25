const fileSystem = require("fs"); //here import all function of file system 

fileSystem.writeFileSync("hello.txt", "create my fist file in node js");


// can we import only required function?
//  YES, 

const fs = require("fs").writeFileSync;
fs("hello2.txt", "create second file");