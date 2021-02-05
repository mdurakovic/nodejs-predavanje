const http = require("http");
const pid = process.pid;


http.createServer((_req, res) => {
    for (let i = 0; i < 1e7; i++); // simulate CPU work
    res.end();
})
.listen(8080, () => {
    console.log(`Started process ${pid}`);
});

process.on("message", msg => {
    console.log(`Message from master: ${msg}`);
});