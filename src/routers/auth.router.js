import express from "express";

const route = express.Router();

import { signup, signin, signout } from "../controllers/auth.controller.js";

route.get("/signup", signup);

route.get("/signin", signin);

route.get("/signout", signout);

export default route;
