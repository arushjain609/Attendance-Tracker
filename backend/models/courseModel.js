const mongoose = require('mongoose')

const Schema = mongoose.Schema

const courseSchema = new Schema({
    courseId: {
        type: String,
        required: true
    },
    courseName: {
        type: String,
        required: true
    },
    semester: {
        type: Number,
        required:true
    },
    isLab: {
        type: Boolean,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Course',courseSchema)
