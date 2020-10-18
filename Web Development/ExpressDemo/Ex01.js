const express = require("express");
const parser = require("body-parser");//This is required for processing POSTED data obtained thro HTTP POST...

//explore path for handling multiple folders.....

const app = express();

//This will make the express use the parser. extended is used to true if UR parsing needs sp type of parsing like JSON, XML and other formats....
app.use(parser.urlencoded({extended:false}));

const root = __dirname;

//The posted data is sent to the server is a body. U need a body-parser to parse the contents of the data. Express expects to create a body parser and include it in the pipeline of processing posting data....
app.post("/Register", (req, res)=>{
    // console.log(req.body);//to check what is the content of the body
    if(req.body == null){
        //this code would execute if UR server does not have body-parser....
        res.send("<h1>There is no data posted to the browser");
    }
    else{
        const name = req.body.uname;//uname is the name of the inputbox placed in the html...
        const address = req.body.uaddress;
        const phone = req.body.uphone;
        res.send(`<h1>${name} from ${address} has been registered with us!!!</h1><hr/>His Contact Phone no is ${phone}. This data is secured as it is posted to the server`);
    }
})

app.get("/", (req, res) => res.send("Testing Express"));
app.get("/Home", (req, res) => res.send("<h1>Home Page of the Application</h1>"));
app.get("/Newuser", (req, res) => res.sendFile(root + "/UserRegistration.html"));//Use this to send static web pages as response...
//Express makes things simple in Nodejs...
app.get("/Register", (req, res)=>{
    const name = req.query.uname;//uname is the name of the inputbox placed in the html...
    const address = req.query.uaddress;
    const phone = req.query.uphone;
    res.send(`<h1>${name} from ${address} has been registered with us!!!</h1><hr/>His Contact Phone no is ${phone}`);
});





app.listen(1234, () =>{
    
    console.log("Server is running at 1234");
})


