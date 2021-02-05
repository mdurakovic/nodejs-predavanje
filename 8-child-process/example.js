const { spawn } = require("child_process");

const child = spawn("pwd");

child.on("exit", function(code, signal) {
    console.log("child process exited with " + `code ${code} and signal ${signal}`);
});

child.stdout.on("data", data => {
    console.log(`child stdout:\n${data}`);
});

child.stderr.on("data", data => {
    console.error(`child stderr:\n${data}`);
});


const child2 = spawn("wc");

process.stdin.pipe(child.stdin);

child2.stdout.on("data", data => {
  console.log(`child stdout:\n${data}`);
});
