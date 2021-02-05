const http = require("http");
const { fork } = require("child_process");

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/compute") {
    console.log("fork...");
    const compute = fork("compute.js");
    compute.send("start");
    
    compute.on("message", sum => {
        console.log("message received...");
        res.end(`Sum is ${sum}`);
    });
  } 
  
  res.end("Ok");
  
});

server.listen(3000);