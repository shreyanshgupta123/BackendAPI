const express=require('express');
const app = express();
const port= process.env.PORT|| 3000
const data=require('./Service.json')
const cors=require('cors')
app.get('/',(req,res)=>{
    res.send('Hello World');
}); 
app.use(cors());

app.get('/get',(req,res)=>{
    res.send(data);
});
app.listen(port,()=>
{
    console.log(`Server is running on port ${port}`);
})