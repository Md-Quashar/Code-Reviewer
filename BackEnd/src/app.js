const express=require('express')
//const aiRoutes=require('./routes/ai.routes')
const cors = require('cors')  // to communicate with Frontend


const  app=express()

app.use(cors())

app.use(express.json())
app.get('/', (req,res)=>{
    res.send("server is testing")
})
// Try to load routes safely
try {
  const aiRoutes = require('./routes/ai.routes');
  app.use('/ai', aiRoutes);
} catch (err) {
  console.error("Error loading routes:", err.message);
}

module.exports=app