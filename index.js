import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "./cors.js";
import appScr from "./app.js";
import bodyParser from "body-parser";
import User from "./User.js";
dotenv.config();
const PORT = process.env.PORT || 5000;
const user = User(mongoose);
const app = appScr(express, mongoose, cors, process.env.LOGIN, bodyParser, user);
app.listen(PORT, () => {
	console.log("Is Working");
});
