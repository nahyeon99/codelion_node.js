// http package를 사용하겠다는 뜻
// http는 서버를 좀 더 쉽게 구축할 수 있게 해주는 패키지
const http = require("http");

http
  .createServer((req, res) => {
    // 서버 생성, 콜백함수를 위한 (req,res)
    // 분기처리(라우팅) -> 후에 express로 좀 더 쉽게 구현 예정
    if (req.url === "/") {
      res.writeHead(200); // 응답을 보냈을 때 보내는 status code
      res.end("main url");
    } else if (req.url === "/upload") {
      res.writeHead(200);
      res.end("upload url");
    } else if (req.url === "/delete") {
      res.writeHead(200);
      res.end("delete url");
    } else {
      res.writeHead(404);
      res.end("Not found!");
    }
  })
  .listen(3000, () => {
    // 서버를 대기시킬 수 있는 함수
    console.log("3000 포트 서버 접속 완료!");
  });
