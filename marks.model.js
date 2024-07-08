const mongoose = require('mongoose');

const MarksSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "please enter subject name"],
        },
        marksscored: {
            type: Number,
            required: true,
            default: 100
        },
        grade: {
            type: String,
            required: [true, "please enter grade as per marks"],
        },
    },
    {
        timestamp: true,
    }
);


const Marks = mongoose.model("Marks", MarksSchema);

module.exports = Marks;