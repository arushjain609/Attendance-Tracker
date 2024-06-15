const express = require('express')
const {createCourse, getCourse, getCourses, deleteCourse, addAttendance, updateAttendance} = require('../controllers/courseController')

const router = express.Router()

router.get('/favicon.ico', (req, res) => res.send(''));

router.get('/', getCourses)

router.get('/:id', getCourse)

router.post('/', createCourse)

router.post('/:id', addAttendance)

router.patch('/:id', updateAttendance)

router.delete('/:id', deleteCourse)



module.exports = router