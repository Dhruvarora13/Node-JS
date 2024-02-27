const express = require('express');

const app= express();

const users = [{
    name: "Harkirat",
    kidneys: [{
        Healthy: false
    }]
}];

//checkinghow amny kidney they have 

app.get('/', (req, res)=>{
    const johnsKidneys= users[0].kidneys;
    const numberOfKidneys=johnsKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0; i<numberOfKidneys; i++){
        if(johnsKidneys[i].Healthy){
            numberOfHealthyKidneys++;
        }
    }
    const numberofUnhealthy = numberOfKidneys - numberOfHealthyKidneys;
    res.json({numberOfKidneys, numberOfHealthyKidneys, numberofUnhealthy})
}
)

app.use (express.json());

app.post('/', (req, res)=>{
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({Healthy: ishealthy});
    res.json({message: "Kidney added"});
});

app.put('/', (req, res)=>{
    for (let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].Healthy = true;
    }
    res.json({message: "All kidneys are healthy"});
});

app.delete('/',(req,res)=>{
    const newkidneys = [];
    for(let i=0;i<users[0].kidneys.length;i++) {
        if(users[0].kidneys[i].Healthy ){
            newkidneys.push({
                'Healthy': true
            })
        } 
    }
    users[0].kidneys = newkidneys;
    res.json({message:"Deleted"})
});
app.listen(3000, ()=> {
    console.log("Server is running on PORT 3000");
})  