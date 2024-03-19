const express = require('express')
const app = express()
const PORT =8000;
const cors = require("cors")

app.use(cors())


app.get('/api/data',(req,res)=>{
    res.json({
        message:'hello from Backend'
    })
})

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
})