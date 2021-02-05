const { spawn } = require("child_process");

const find = spawn("find", [".", "-type", "f"]);

find.stdout.on("data", data => {
    console.log(`All files ${data}`);
  });

const wc = spawn("wc", ["-l"]);

find.stdout.pipe(wc.stdin);

wc.stdout.on("data", data => {
  console.log(`Number of files ${data}`);
});


wc.on("exit", function(code, signal) {
  console.log(
    "child process exited with " + `code ${code} and signal ${signal}`
  );
});
