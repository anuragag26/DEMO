import express from 'express';
import sum from './sum.js';

const app = express();
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.get('/home', async (req,res) => {
    res.json({message: "Welcome to the home page!"});
})

app.get("/getSum/:a/:b", async (req,res) => {
    const { a, b } = req.params;
    const result = sum(Number(a), Number(b));
    res.json({ result });
})