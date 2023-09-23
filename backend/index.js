const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

//const {testConnection} = require('./models/conn');
const usersRoutes = require("./routers/usersRoutes")

app.use(cors());
app.use(express.json());


//testConnection()

app.get("/", (req, res)=>{
    res.status(200).json("This is our home route")
});

app.use("/users", usersRoutes)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
