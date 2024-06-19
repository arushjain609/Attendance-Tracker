const express = require('express')
const {createCourse, getCourse, getCourses, deleteCourse, addAttendance, updateAttendance} = require('../controllers/courseController')

const router = express.Router()

router.get('/favicon.ico', (req, res) => res.send(''));

router.get('/', getCourses)

router.get('/course/:id', getCourse)

router.post('/', createCourse)

router.post('/course/:id', addAttendance)

router.patch('/course/:id', updateAttendance)

router.delete('/course/:id', deleteCourse)



module.exports = router