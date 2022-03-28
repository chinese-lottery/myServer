const mongoose = require("mongoose");

const winningSchema = new mongoose.Schema({
    user_Id: { type: mongoose.Types.ObjectId, ref: "user"},
    item_id: { type: mongoose.Types.ObjectId, ref: "item" },
    winning_date: { type: Date, default: Date.now()}
});

const Winning = mongoose.model("winning", winningSchema);
module.exports = {
    winningSchema,
    Winning
}