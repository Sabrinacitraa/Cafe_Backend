const express = require("express");
const bodyParser = require("body-parser")
const app = express();
const PORT = 8000;
const cors = require(`cors`);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors());
const adminRoute = require(`./routes/admin.route`)
const foodRoute = require("./routes/food.route")
const orderRoute = require("./routes/order.route")

app.use(`/admin`, adminRoute)
app.use("/food", foodRoute)
app.use("/order", orderRoute)


app.listen(PORT, () => {
    console.log(`server run on port ${PORT}`)
})
