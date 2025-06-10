import { Router } from "express";
import { testItem } from "./test";

const authRouter = Router()

authRouter.get('/', testItem)

export default authRouter;