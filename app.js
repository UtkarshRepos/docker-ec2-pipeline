const http = require("http");
const port = 3000;

const requestHandler = (req, res) => {
  res.end("🚀 Hello from EC2 via CI/CD!");
};

const server = http.createServer(requestHandler);
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
