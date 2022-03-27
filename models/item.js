const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  item_name: String,
  item_description: String,
  item_price: Number,
});

const Item = mongoose.model("items", itemSchema);
module.exports = {
  //האם צריך ליצא גם את הסכמה? או מספיק רק את הטבלה
  itemSchema,
  Item,
};
