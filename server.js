const express=require("express");
const app = express();
const port=3333

app.listen(port,() =>{
    console.log(`Server listening on port ${port}`);
})

app.use(express.static(__dirname))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/" + "calcolatore.html");
});


app.get("/calcolatore",(req,res)=>{
    const display=req.query.display;
    console.log(`/calcolatore req.query.display = ${display}`)
    let result=eval(display);
    let json_result={
        "display":display,
        "result":result
    }
    res.send(json_result);
});