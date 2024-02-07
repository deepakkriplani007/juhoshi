import Form from "../models/Form.js";

export const createForm = async (req, res, next) => {
  const form = req.body.formData;

  const newForm = new Form(form);
  await newForm.save();
  try {
  } catch (error) {
    console.log(error.message);
  }
  //   console.log(newForm);
  res.send("hello");
};

export const getdata = async (req, res, next) => {
  const data = await Form.find();
  console.log(data);
  res.send(data);
};

export const verifydata = async (req, res, next) => {
  const data = req.body.admin;
  console.log(data.admin);
  if (data.admin == "12345678") res.send(true);
  else res.send(false);
};
