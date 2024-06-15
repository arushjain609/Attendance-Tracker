const mongoose = require('mongoose')

const Schema = mongoose.Schema

const attendanceSchema = new Schema({
    courseId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    present: {
        type: Boolean,
        required: true
    }
    
}, {timestamps: true})

module.exports = mongoose.model('Attendance',attendanceSchema)
