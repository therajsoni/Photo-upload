import express from "express";
import {singleUpload} from "./middleware/multer.js";
import fs from "fs";

const app = express();



// Ensure 'uploads' folder exists
if (!fs.existsSync("uploads")) {
    fs.mkdirSync("uploads");
}


app.get('/',(req,res)=>{
res.send('hello')
})



app.post('/upload',singleUpload,(req,res)=>{
    res.send('ok')
})

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});
