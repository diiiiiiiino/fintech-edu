let jwt = require("jsonwebtoken");
let privateKey = "dkfkjaewlsdklfjsajkldf";
var tokenKey = "f@i#n%tne#ckfhlafkd0102test!@#%";
jwt.sign(
  {
    userId: 1,
    userEmail: "skymill2000",
  },
  tokenKey,
  {
    expiresIn: "10d",
    issuer: "fintech.admin",
    subject: "user.login.info",
  },
  function (err, token) {
    console.log("로그인 성공", token);
    res.json(token);
  }
);

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJFbWFpbCI6InNreW1pbGwyMDAwIiwiaWF0IjoxNjkxMTE3MTE4LCJleHAiOjE2OTE5ODExMTgsImlzcyI6ImZpbnRlY2guYWRtaW4iLCJzdWIiOiJ1c2VyLmxvZ2luLmluZm8if\n' +
    'Q.YCcz8Dhizz_trcz0KF8hvIemXfN5uJBj782PKN5H1_0';

jwt.verify(token, "wrong-secret", (err, decoded) => {
    if(err){
        console.error(err);
        throw err;
    } else {
        console.log(decoded);
    }
})
