const mongoose=require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/digital-flake").then(()=>{
    console.log("DB connected...!!!")
}).catch((err)=>{
    console.log("Error: ", err, "DB not connected...!!!")
})
