const http = require("http");

const server = http.createServer((req, res) => {

  const { method, url, headers } = req;

  if (method === "GET" && url === "/cats") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    const responseBody = {
      headers,
      method,
      url,
      body: ["Mrs. Meowsers", "Hairball", "Jerk"]
    }

    res.write(JSON.stringify(responseBody));
    res.end();
  }

  if (method === "GET" && url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.end("<html><body><h1>Hello, World!</h1></body></html>");
    return;
  }

});

server.listen(8000, () => {
  console.log(`Server running at port 8000`);
});
