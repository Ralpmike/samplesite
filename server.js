const { createServer } = require("http");
const path = require("path");
const fs = require("fs");

const server = createServer((req, res) => {
  //? API route
  const apiPath = path.join(__dirname, "api", "db.json");
  console.log(apiPath);
  // console.log(req);
  if (req.url === "/api" || req.url === "/api/db.json") {
    fs.readFile(apiPath, "utf-8", (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "File not found" }));
        return;
      }
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(data);
    });

    return; //exit to prevent the code below
  }

  //? File route
  if (req.url === "/" || req.url === "/file.txt") {
    const filepath = path.join(__dirname, "file.txt");
    fs.readFile(filepath, "utf-8", (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("File not found");

        return;
      }

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end(data);
    });
    return;
  }

  //?All other routes
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/plain");
  res.end("Route not found");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server is running on http://127.0.0.1:3000");
});
