import { Request, Response } from "express";
import express from "express";
import dotenv from 'dotenv';
dotenv.config();

console.log(process.env['teste']);

const app = express()

app.get('/api/test/health', (req :Request, res :Response) => {
    res.send('ok')
})

app.listen(8081, () => {
    console.log(`Listening at ${8081}`);
});