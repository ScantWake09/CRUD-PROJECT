const Marks = require('../models/marks.model');

const getMarks = async (req, res) => {

    try {
        const marks = await Marks.find({});
        res.status(200).json(marks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const getMark = async (req, res) => {
    try {
        const { id } = req.params;
        const mark = await Marks.findById(id);
        res.status(200).json(mark);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createMark = async (req, res) => {
    try {
        const marks = await Marks.create(req.body);
        res.status(200).json(marks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateMark = async (req, res) => {
    try {
        const { id } = req.params;
        const mark = await Marks.findByIdAndUpdate(id, req.body);
        if (!mark) {
            return res.status(404).json({ message: "Marks not found" });
        }

        const UpdatedMark = await Marks.findById(id);
        res.status(200).json(UpdatedMark);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteMark = async (req, res) => {
    try {
        const { id } = req.params;
        const mark = await Marks.findByIdAndDelete(id);
        if (!mark) {
            return res.status(404).json({ message: "Marks not found" });
        }

        res.status(200).json({ message: "Marks deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getMarks,
    getMark,
    createMark,
    updateMark,
    deleteMark
};