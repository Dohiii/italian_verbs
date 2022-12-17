// standart
require("dotenv").config();
require("express-async-errors");


const path = require("path")

// express
const express = require("express");
const xss = require('xss-clean');
const app = express();

// extra security packages
const helmet = require("helmet")
const cors = require("cors")

const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

// const rateLimit = require("express-rate-limit")

// connect DB
const connectDB = require("./db/connect");


// custom middleware
const auth = require("./middleware/authentication")

//routers
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const publicVerbsRouter = require("./routes/verbs");


// error handler middleaware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");



// middleware
// app.set("trust proxy", 1);
// app.use(rateLimit({
//     windowMs: 15 * 60 * 1000,
//     max: 100,
// }))


app.set('trust proxy', 1);

// app.use(express.static(path.resolve(__dirname, './client/build')))
app.use(express.static('./public'));
app.use(express.json());
app.use(helmet())
app.use(xss())
app.use(cors(corsOptions)) // Use this after the variable declaration





// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/verbs", publicVerbsRouter);



// app.use('/static', express.static('public'))



app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();
