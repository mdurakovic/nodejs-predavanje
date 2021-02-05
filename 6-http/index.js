const https = require("https");

const options = {
  hostname: "jsonplaceholder.typicode.com",
  path: "/users",
  method: "GET",
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on("data", (d) => {
    //console.log("Response data: ", d);
    process.stdout.write(d);
  });

});

req.on("error", (error) => {
  console.error(error);
});

req.end();
