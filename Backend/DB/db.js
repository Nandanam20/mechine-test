var mongoose=require('mongoose');
const Dbconnect=()=>{
mongoose.connect("mongodb://localhost:27017/contact")
.then(()=>{
    console.log("Connected to MongoDB")
}
)
.catch((err)=>{
    console.error(err)
});
}
module.exports=Dbconnect;