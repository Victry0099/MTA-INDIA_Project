import Contact from "../models/contactModel.js";

export const createContact = async (req, res) => {
  const { fullname, email, number, course, mode } = req.body;

  try {
    const newContact = new Contact({
      fullname,
      email,
      number,
      course,
      mode,
    });

    await newContact.save();
    res.status(201).json({ message: "Contact saved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to save contact", error });
  }
};
