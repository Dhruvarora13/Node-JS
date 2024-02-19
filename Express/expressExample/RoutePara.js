const express = require('express');

const app = express();

const courses = [
    {id:1,name:'java'},
    {id:2,name:'JS'},
    {id:3,name:'Python'}
];

app.get('/courses/:coursename',(req,res) => {
    const course = courses.find(course => course.name === req.params.coursename);
    res.send(course);

})


app.listen(5000,()=>console.log(`Server is running on PORT : 5000`))