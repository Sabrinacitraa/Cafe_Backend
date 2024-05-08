const express = require('express');
const app = express();
app.use(express.json());
const adminController = require(`../controllers/admin.controller`);
const auth = require(`../controllers/auth.controller`);

app.get("/", adminController.getAllAdmin)
app.post("/add", adminController.addAdmin);
app.post("/auth", auth.authenticate);

// Menetapkan aplikasi express sebagai modul yang diekspor
module.exports = app;
