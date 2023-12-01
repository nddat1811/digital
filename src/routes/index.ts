import express from "express";
import ProductRouter from "../storm/storm.router"

const router = express.Router();

router.use("/v1/storm", ProductRouter)

export default router;
