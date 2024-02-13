// Problem Statement: Create a function executeCommand(command) that takes a shell command as input and executes it using the child_process module.
//  The function should print the output of the command to the console.


const cp = require('child_process');

function executeCommand(command){

    cp.exec(command,(error,stdout,stderr)=>{

        if(error){
            console.log("Error:",error.message);
            return;

        }
        if(stderr){
            console.log("Standard Error :", stderr);
            return;
        }

        console.log(stdout);


    })
}
executeCommand('dir');

executeCommand('echo "hello"');