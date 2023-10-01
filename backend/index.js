const express = require('express');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const credentials = require('./middleware/credentials');
const app = express();
const port = 3500;
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require('cookie-parser');

//const {testConnection} = require('./models/conn');
const userRoutes = require("./routers/api/userRoutes");
const zombieRoutes = require("./routers/zombieRoutes");
const registerUserRoutes = require("./routers/registerUserRoutes");
const loginRoutes = require("./routers/loginRoutes");
const authRoutes = require("./routers/authRoutes");
const zombieTrackersRoutes = require("./routers/api/zombieTrackersRoutes");
const refreshRoutes = require("./routers/refreshRoutes");
const logoutRoutes = require("./routers/logoutRoutes");


// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);
app.use(cors(corsOptions));
//app.use(cors());


// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

app.use(express.json());
//testConnection()

//middleware for cookies
app.use(cookieParser());

app.get("/", (req, res)=>{
    res.status(200).json("This is our home route")
});

//app.use("/", require('./routes/root')); //not sure I need this

app.use("/zombies", zombieRoutes);
app.use("/register", registerUserRoutes);
app.use("/auth", authRoutes);
app.use("/refresh", refreshRoutes);
app.use("/logout", logoutRoutes);

app.use(verifyJWT);
app.use("/zombieTrackers", zombieTrackersRoutes);
app.use("/users", userRoutes);





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
