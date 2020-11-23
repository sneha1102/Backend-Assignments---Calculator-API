const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

const ufl = -1000000;
const ofl = 1000000;
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/",(req,res)=>{
    res.send("Hello World!");
})
app.post("/add", (req, res) => {
    const num1 =Number( req.body.num1);
    const num2 = Number(req.body.num2);
    let notANo = false;
    if (isNaN(num1) || isNaN(num2)) {
        notANo = true;
    }
    let result = null;
    if (!notANo) {
        result = num1 + num2;
    }
    let message = "the sum of given two numbers";
    let status = "success";
    if (notANo) {
        message = "Invalid data types";
        status = "error";
    }
    if (num1 < ufl || num2 < ufl || result < ufl) {
        message = "Underflow";
        status = "error";
        notANo = true;
    }
    if (num1 > ofl || num2 > ofl || result > ofl) {
        message = "Overflow";
        status = "error";
        notANo = true;
    }
    res.json({ status: status, message: message, sum: result });

})

app.post("/sub",(req,res)=>{
    const num1=req.body.num1;
    const num2=req.body.num2;
    let notANo=false;
    if(isNaN(num1) || isNaN(num2)){
        notANo=true;
    }
    let result=null;
    if(!notANo){
        result=num1-num2;
    }
    let message="the difference of given two numbers";
    let status="success";
    if(notANo){
        message="Invalid data types";
        status="error";
    }
    if(num1 <ufl || num2 <ufl ||result<ufl){
        message="Underflow";
        status="error";
        notANo=true;
    }
    if(num1 >ofl || num2 >ofl ||result>ofl){
        message="Overflow";
        status="error";
        notANo=true;
    }
    res.json({status:status,message:message,sum:result}); 
})

app.post("/multiply",(req,res)=>{
    const num1=req.body.num1;
    const num2=req.body.num2;
    let notANo=false;
    if(isNaN(num1) || isNaN(num2)){
        notANo=true;
    }
    let result=null;
    if(!notANo){
        result=num1*num2;
    }
    let message="The product of given numbers";
    let status="success";
    if(notANo){
        message="Invalid data types";
        status="error";
    }
    if(num1 <ufl || num2 <ufl ||result<ufl){
        message="Underflow";
        status="error";
        notANo=true;
    }
    if(num1 >ofl || num2 >ofl ||result>ofl){
        message="Overflow";
        status="error";
        notANo=true;
    }
    res.json({status:status,message:message,sum:result}); 
})

app.post("/divide",(req,res)=>{
    const num1=req.body.num1;
    const num2=req.body.num2;
    let notANo=false;
    if(isNaN(num1) || isNaN(num2)){
        notANo=true;
    }
    let result=null;
    if(!notANo){
        if (num2 === 0) {
            message = "Cannot divide by zero";
            status = "error";
            notNumber = true;
        } else {
            result = num1 / num2;
        }
    }
    let message="The division of given numbers";
    let status="success";
    if(notANo){
        message="Invalid data types";
        status="error";
    }
    if(num1 <ufl || num2 <ufl ||result<ufl){
        message="Underflow";
        status="error";
        notANo=true;
    }
    if(num1 >ofl || num2 >ofl ||result>ofl){
        message="Overflow";
        status="error";
        notANo=true;
    }
    res.json({status:status,message:message,sum:result}); 
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;