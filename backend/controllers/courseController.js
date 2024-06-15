const Course = require('../models/courseModel')
const Attendance = require('../models/attendanceModel')

const getCourses = async (req, res) => {
    try {
        console.log("Fetching courses and attendance from database...");
        const courses = await Course.find({});
        const allAttendance = await Attendance.find({});

        const coursesWithAttendance = courses.map(course => {
            const courseAttendanceRecords = allAttendance.filter(record => record.courseId === course.courseId);
            const totalClasses = courseAttendanceRecords.length;
            const presentClasses = courseAttendanceRecords.filter(record => record.present).length;
            const attendancePercentage = totalClasses ? (presentClasses / totalClasses) * 100 : 0;

            return {
                ...course._doc,
                attendance: `${attendancePercentage.toFixed(2)}%`
            };
        });

        console.log("Courses with attendance:", coursesWithAttendance);
        
        // Sending array directly in response
        res.status(200).json(coursesWithAttendance);
    } catch (error) {
        console.error('Error fetching courses:', error.message);
        res.status(500).json({ error: error.message });
    }
};



const getCourse = async (req, res) => {
    const {id} = req.params
    const course = await Course.findById(id)
    const attendance = await Attendance.findById(id)
    if (!course) {
        return res.status(404).json({error: 'No such course'})
    }
    res.status(200).json({course, attendance})
}

const createCourse = async (req, res) => {
    const { courseId, courseName, semester, isLab } = req.body;

    try {
        // Validate incoming data against Mongoose schema
        if (!courseId || !courseName || !semester || typeof isLab !== 'boolean') {
            throw new Error('Invalid data format');
        }

        // Create new course document
        const newCourse = new Course({
            courseId,
            courseName,
            semester,
            isLab
        });

        // Save course to MongoDB
        await newCourse.save();

        res.status(201).json({ message: 'Course added successfully' });
    } catch (error) {
        console.error('Error adding course:', error.message);
        res.status(500).json({ error: error.message });
    }
}


const deleteCourse = async (req, res) => {
    const { id } = req.params;
    const course = await Course.findOneAndDelete({_id : id})
    Attendance.deleteMany({_id: id})
    .then(() => {
        console.log('Deleted Successfully')
    })
    .catch((error) => {
        console.log(error)
    })
    res.status(200).json(course);
}


const addAttendance = async (req, res) => {
    const { id } = req.params;
    const course = await Course.findById(id);
    const { date, present} = req.body;
    try{
        const attendance = await Attendance.create({courseId: course.courseId, date, present})
        res.status(200).json(attendance)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}

const updateAttendance = async (req, res) => {
    const { id } = req.params;
    const course = await Course.findById(id);
    const { date, present} = req.body;
    try {    
        const attendance = await Attendance.findOneAndUpdate({courseId: course.courseId, date: date},{
            present: present
        })
        res.status(200).json(attendance)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }


}

module.exports = {
    createCourse,
    getCourses,
    getCourse,
    deleteCourse,
    addAttendance,
    updateAttendance
}