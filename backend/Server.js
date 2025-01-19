const express=require('express');
const cors=require('cors');
const axios=require('axios');

const app = express();
const cors = require("cors");

app.use(cors({
    origin: "*",   // Allow all origins
    methods: ["GET"]
}));


app.use(express.json());
 app.get("/api/advice", async (req, res) => {
    try {
        const response = await axios.get("https://api.adviceslip.com/advice");
        res.json(response.data);}
        catch (error) {
            res.status(500).json({error: "Error getting message from API"});
 }
});

app.listen(5000,()=> console.log('server listening on port 5000'));
