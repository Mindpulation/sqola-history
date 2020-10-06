const historyHandlers =  require('../routes/handlers/handlers')
const express = require('express');
const app = express.Router();

app.post("/new",async (req, res) => {
    await historyHandlers.NewHistory(req, res)
});
app.post("/find",async (req, res) => {
    await historyHandlers.FindHistory(req, res)
});
app.put("/update",async (req, res) => {
    await historyHandlers.UpdateHistory(req, res)
});
// app.delete("/:userId",async (req, res) => {
//     await historyHandlers.DeleteHistory(req, res)
// });

module.exports = app;
