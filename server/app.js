import express, { json, urlencoded } from "express";
import morgan from "morgan";

import cors from "./util/cors.js";
import dbConnection from "./util/dbConnection.js";
import { customError, serverError } from "./util/errors.js";

// // routes
const app = express();

// // for logging information during development
app.use(morgan("dev"));

// // connect to database
dbConnection();

app.use(json({ extended: true }));
app.use(urlencoded({ extended: true }));

// // Prevent CORS(Cross Origin Resource Sharing) error
app.use(cors);

// // routes
// app.use("/dcb/propertytax", pTaxRouter);

// // error handling
app.use(customError);
app.use(serverError);

export default app;
