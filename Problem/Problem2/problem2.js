//Problem Statement: Create a function writeToFile(filePath, content) that takes the path to a file and user input content as input. 
// The function should write the content to the specified file using the fs module.


const fs =require('fs')
const path = require(('path'))
function writeToFile(filePath,content){

    const FileName = path.basename(filePath)



    fs.writeFile(filePath,content,(error)=>{
        if(error){
            console.log(`Error : ${error.message}`)
        }
        else{
            console.log(`Data written to ${FileName} `)
        }

    }
        

    )

}
writeToFile('test-files/output1.txt', 'Sample content Dhruv.');
// Expected Output: Data written to output1.txt

writeToFile('test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');
// Expected Output: Error writing to file: ENOENT: no such file or directory...