import express from "express";

const route = express.Router();

import { signup, signin, signout } from "../controllers/auth.controller.js";

route.post("/signup", signup);

route.post("/signin", signin);

route.post("/signout", signout);

export default route;
