import express, { response } from "express";

const app = express();

const mockUser = [
  { id: 1, name: 'dhruv', ph: 65465 },
  { id: 2, name: 'sagar', ph: 657557 },
  { id: 3, name: 'anson', ph: 6564 },
  { id: 4, name: 'aditya', ph: 662655 },
];

app.get('/api/users',(request,response)=>{
    response.status(200).send(mockUser)
})
app.get('/api/users/:id',(request,response)=>{
    const userId = request.params.id;
    const parseduserId =parseInt(userId);
   
     //if we get a non numeric string like sbhajhdsa,sjajadjks,sadda
    if(isNaN(parseduserId)){
        return response.status(400).send({ message :" Bad request , Invalid user id"})

    }
    const findUser =mockUser.find((user)=>user.id===parseduserId)

    if(!findUser){
        response.send({message:"User not found"})
    }
    response.send(findUser);

   

    
})

//creating an http server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
