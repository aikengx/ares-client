const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const taskSchema = new Schema({
  name: String,
  lname: String,
  email: String,
  phone: String,
  image: String,
  products: [{type: Schema.Types.ObjectId, ref: 'Product'}],
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;