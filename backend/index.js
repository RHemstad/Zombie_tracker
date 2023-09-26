const express = require('express');
const cors = require('cors');
const app = express();
const port = 3500;

//const {testConnection} = require('./models/conn');
const userRoutes = require("./routers/userRoutes");
const zombieRoutes = require("./routers/zombieRoutes");
const registerUserRoutes = require("./routers/registerUserRoutes");

app.use(cors());
app.use(express.json());
//testConnection()

app.get("/", (req, res)=>{
    res.status(200).json("This is our home route")
});

app.use("/users", userRoutes);
app.use("/zombies", zombieRoutes);
app.use("/register", registerUserRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
