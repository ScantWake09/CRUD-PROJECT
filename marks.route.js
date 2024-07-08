const express = require("express");
const Marks = require("../models/marks.model.js");
const router = express.Router();
const { getMarks, getMark, createMark, updateMark, deleteMark } = require('../controllers/marks.controller.js');


router.get('/', getMarks);
router.get("/:id", getMark);
router.post("/", createMark);
//Update marks
router.put("/:id", updateMark);
//delete marks
router.delete("/:id", deleteMark);

module.exports = router;