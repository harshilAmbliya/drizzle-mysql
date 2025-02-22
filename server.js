import "dotenv/config.js";
import express from "express";
import routes from "./routes/index.js";
import morgan from "morgan";
import { errorHandler } from "./middlewares/error.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"));

app.use("/api", routes)
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

