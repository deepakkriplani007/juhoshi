import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
    // unique: true,
  },
  company: {
    type: String,
  },
  owner: {
    type: String,
  },

  item: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  specification: {
    type: String,
  },
});

export default mongoose.model("form", FormSchema);
