const express = require("express");
const mongoose = require("mongoose");
const itemRout = require("./router/item");
const winRout = require("./router/winning");
const app = express();

mongoose.connect("mongodb://localhost:27017/sale")
    .then(succ => console.log("mongo db connected "))
    .catch(err =>
        console.log(err)
    )

app.use(express.json())
app.use("/item", itemRout)
app.use("/win", winRout)
app.listen(4500, () => { console.log("waiting") })