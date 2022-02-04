const express=require('express');
const app=express();
const connectDB=require('./config/db');
const cors=require('cors');
app.use(cors());
const PORT=process.env.PORT||4000;
connectDB();
app.get('/',(req,res)=>{
    res.send("Running api");
})
app.use(express.json({entended:false}));
app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'))
app.use('/api/profile',require('./routes/api/profile'))
app.use('/api/posts',require('./routes/api/posts'))
app.listen(PORT,()=>console.log("server"));