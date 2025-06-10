import express from 'express'
import authRouter from './infrastructure/web/routes/auth.router'

const app = express()

app.use('/test', authRouter);

export default app;

