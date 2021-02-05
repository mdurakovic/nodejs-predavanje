const fs = require("fs");
const server = require("http").createServer();

const pid = process.pid;
console.log("pid", pid);

server.on("request", (_req, res) => {
  fs.readFile("./big.file", (err, data) => {
    if (err) {
      throw err;
    }
    res.end(data);
  });

});

server.listen(8000);



//htop -p PID
//Shift + H