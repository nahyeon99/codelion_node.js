var express = require("express");
var router = express.Router();

let arr = [];

// GET method
router.get("/read", (req, res) => {
  res.status(200).json({
    message: "read success",
  });
});

// POST method

router.post("/create", (req, res) => {
  // 비구조화 할당, 해당 데이터를 바로 받아올 수 있음
  const { data } = req.body;
  arr.push(data);
  res.status(200).json({
    message: "create success",
    result: arr,
  });
});

// PUT method

router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  arr[id] = data;
  res.status(200).json({
    message: "update success",
    result: arr,
  });
});

// DELETE method
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  arr.splice(id, 1);
  res.status(200).json({
    message: "delete success",
    result: arr,
  });
});

module.exports = router;
