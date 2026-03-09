import express from "express";
const app = express();
const POTR = 5000;
app.use(express.json());
app.get("/", (req, res)=> {
    res.send("Backend is running ");
});
app.listen(POTR, () => {
    console.log("Server running on http://localhost:${PORT}");
});