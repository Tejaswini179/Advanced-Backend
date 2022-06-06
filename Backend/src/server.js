const app = require("./index");

const connect = require("./config/db")

app.listen(5000,async (req,res)=>{
    try {
        await connect()
        console.log("listening on port 5000")
    } catch (error) {
       console.log(error) 
    }
})