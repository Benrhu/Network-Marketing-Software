const userRouter = require("express").Router();
const User = require("../models/users");
const bcrypt = require("bcrypt");
const shortid = require("shortid")

userRouter.get("/users", async (req, res) => {
  User.find({}).then((users) => {
    res.json(users);
  });
});

userRouter.post("/register", async (req, res) => {
  
  const { body } = req;
  const { firstname, lastname, email, password, referralCode } = body;

  referralCode = shortid.generate();
  const saltRounds = 10;
  const passwordHash = await bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
    console.log(hash);
    });
  });

  const user = new User({
    firstname,
    lastname,
    email: email,
    passwordHash,
  });

  const savedUser = await user.save();

  res.json(savedUser);
});

userRouter.get("/users/:id", async (req, res) => {
  const { userId } = req.params.id

  User.findById(userId).then((user) => {
    if (user) {
      return res.json(user);
    } else {
      res.status(404).end();
    }
  });
});

userRouter.delete("/delete/:id", (req, res) => {
  const {userId} = req.params;
  User.findByIdAndRemove(userId, (err) => {
    if(!err){
        res.redirect("/");
    } else {
        console.log(err)
    }
    });
});

module.exports = userRouter
