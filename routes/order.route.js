const express = require("express");
const app = express();
const orderController = require("../controllers/order.controller")
const {authorize} = require("../controllers/auth.controller")

app.post("/",orderController.addOrder)
app.get("/", authorize, orderController.getAllOrder)

module.exports = app