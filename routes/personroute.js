const express = require("express");
const router = express.Router();
const person = require("./../Schema/personschema.js");
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const personData = new person(data);
    await personData.save();
    res.status(200).json("data inserted successfully");
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const Person = await person.find();
    res.status(200).send(Person);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/:work", async (req, res) => {
  try {
    const worktype = req.params.work;
    if (worktype == "chef" || worktype == "waiter" || worktype == "manager") {
      const personData = await person.find({ work: worktype });
      res.status(200).json(personData);
    } else {
      res.status(404).json({ error: "work type not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const updatedData = req.body;
    const id = req.params.id;
    const response = await person.findByIdAndUpdate(id, updatedData);
    if (!response) {
      res.status(404).json({ error: "data isnt updated" });
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteRes = await person.findByIdAndDelete(id);
    if (!deleteRes) {
      res.status(404).json({ error: "data isn't deleted" });
    } else {
      res.status(200).json(deleteRes);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});
module.exports = router;
