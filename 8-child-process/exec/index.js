const { exec } = require("child_process");

exec("find . -type f | wc -l", (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }

  console.log(`Number of files ${stdout}`);
});


/**
 * const child = spawn("find . -type f | wc -l", {
  stdio: "inherit",
  shell: true,
  cwd: "/Users/samer/Downloads"
});
 * 
 */