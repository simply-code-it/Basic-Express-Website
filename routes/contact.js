var express = require("express");
var nodemailer = require("nodemailer");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("contact", { title: "Contact" });
});

router.post("/send", function (req, res, next) {
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "pdpydvcare@gmail.com",
      pass: "oppo@P1234",
    },
  });

  var mailOptions = {
    from: "pdpydvcare@gmail.com",
    to: "dashwar.pradeep@gmail.com",
    subject: "Website Submission",
    text:
      "You have a new Submission with the following details ... Name: " +
      req.body.name +
      " Email: " +
      req.body.email +
      " Message: " +
      req.body.message,
    html:
      "<p>You got a new submission with the following details.. </p><ul><li>Name: " +
      req.body.name +
      "</li><li>Email: " +
      req.body.email +
      "</li><li>Message: " +
      req.body.message +
      "</li></ul>",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.redirect("/");
    } else {
      console.log("Message Sent: " + info.response);
      res.redirect("/");
    }
  });
});

module.exports = router;
