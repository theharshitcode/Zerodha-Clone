const express = require("express");

const router = router.express();

router.get("/", async(req, res)=>{
    res.send("Stock Route");
})

router.post("/buy", async(req, res)=>{
    res.send("Buy Stock");
})

router.post("/sell", async(req, res)=>{ 
    res.send("Sell Stock");
})

router.get("/history", async(req, res)=>{
    res.send("Transaction History");
})

router.get('/:symbol', async(req,res)=>{
    res.send("Stock Symbols")
})

router.get('/search?q=tcs', async(req,res)=>{
    res.send("Stock Symbols")
})

module.exports = router;