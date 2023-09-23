const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const credentials = require('./middleware/credentials');

const port = 3500;
//const PORT = process.env.PORT || 3500;

//const {testConnection} = require('./models/conn');
const userRoutes = require("./routers/userRoutes");
const registerUserRoutes = require("./routers/registerUserRoutes");

//app.use(cors());
app.use(cors(corsOptions));
//app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
//testConnection()

app.get("/", (req, res)=>{
    res.status(200).json("This is our home route")
});

app.use("/users", userRoutes);
//app.use("/register", registerUserRoutes);
app.use('/register', require('./routers/registerUserRoutes'));



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
