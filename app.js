// standart
require("dotenv").config();
require("express-async-errors");

// express
const express = require("express");
const app = express();

// extra security packages
const helmet = require("helmet")
const cors = require("cors")
const xss = require("xss-clean")
const rateLimit = require("express-rate-limit")

// connect DB
const connectDB = require("./db/connect");

//routers
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const publicVerbsRouter = require("./routes/verbs");

// middleware
app.set("trust proxy", 1);
app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
}))
app.use(express.json());
app.use(helmet())
app.use(cors())
app.use(xss())

// custom middleware
const auth = require("./middleware/authentication")

// error handler middleaware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/admin", auth, adminRouter);
app.use("/api/v1/verbs", publicVerbsRouter);

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
