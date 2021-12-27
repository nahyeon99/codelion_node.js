const http = require("http"); // http package를 사용하겠다는 뜻

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<p>Hello World</p>");
  })
  .listen(3000, () => {
    console.log("3000 포트 서버 접속 완료!");
  });
