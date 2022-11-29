require("./mongo");

const port = process.env.PORT || 3000;
const path = require("path");
const express = require("express");
const app = express();
const userRouter = require('./controllers/usersController')
const loginRouter = require('./controllers/login');
const salesRouter = require("./controllers/salesController");

/* const staticPath = path.join(__dirname,);
app.use(express.static(staticPath)); */

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).send('hola');
});

app.use('/users', userRouter)
app.use('/sales', salesRouter)
app.use('/login', loginRouter)

app.listen(port, function () {
  console.log("Server running at: " + "http://localhost:" + port);
});
