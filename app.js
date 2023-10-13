const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`This Server brought you by port : ${PORT}`);
});

/**
 * MVC
 */

app.route = require("./routes/index");

//app.post('/films/create')
//app.get('/films/list)
//app.get('/films/:id')
//app.get('/films?category=romance'))
