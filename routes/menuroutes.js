const express = require("express");
const router = express.Router();
const menu = require("./../Schema/menuschema.js");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const menuData = new menu(data);
    await menuData.save();
    res.status(200).json(menuData);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const menuData = await menu.find();
    res.status(200).json(menuData);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
});
module.exports = router;
