var express = require("express");
var router = express.Router();

// router.get("/", (req, res) => {
// res.json({
//   message: "main success!!",
// });
// });

router.post("/main", (req, res) => {
  const data = req.body.data;
  // res.send("문자열이 응답됩니다.");
  // res.json({
  //   message: "json 응답"
  // })
  res.render("index");
});

module.exports = router;
