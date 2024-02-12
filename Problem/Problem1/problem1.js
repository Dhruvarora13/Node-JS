// Problem Statement: Create a function readFileContent(filePath) that takes the path to a file as input and reads its content asynchronously using the fs module. 
// The function should print the content to the console.

const fs = require('fs')
// const path = require('psth');

function readFileContent(filePath){

    fs.readFile(filePath,{encoding:'utf-8'},(error,data)=>{
        if(error){
            console.log(error.message);
        }
        else{
            console.log(`Content : ${data}`)
        }
    })
  
}
readFileContent("test-files/file1.txt");
readFileContent("test-files/empty-file.txt");
readFileContent("test-files/non-existentfile.txt");

