const express = require("express")
const app = express()

const PORT = 3000

app.get("/",(req,res)=>{
  res.json({
    message:"Hello devops"
  })
})
app.listen(PORT,()=>{
  console.log("working")
})
