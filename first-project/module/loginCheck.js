const loginCheck = (req, res, next) => {
  const userLogin = false; // 유저의 로그인 유무 체크
  if (userLogin) {
    next();
  } else {
    res.status(400).json({
      message: "login fail!",
    });
  }
};

module.exports = loginCheck;
