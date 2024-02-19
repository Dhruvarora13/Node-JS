const http = require('http');

const fs = require('fs');


const server = http.createServer( (req,res) => {
    const log = `${Date.now()} : New Request Rev.\n`;
    fs.appendFile('log.txt',log,(err,data)=>{
         res.end('Hello from server');
    })

    // console.log('New req Rev.');
    // res.end('Hello from server');
})

server.listen(8000, () => console.log('server started'))