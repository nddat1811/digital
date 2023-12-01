import express from "express";
import {
  getListStorm,
} from "./strom.controller";

const router = express.Router();

router.get("/list", getListStorm);

export default router;
