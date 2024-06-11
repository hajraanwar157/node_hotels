const mongoose = require("mongoose");
const { Schema } = mongoose;
const personSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  work: {
    type: String,
    required: true,
    enum: ["chef", "manager", "waiter"],
  },
  mobile: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const person = mongoose.model("Person", personSchema);
module.exports = person;
