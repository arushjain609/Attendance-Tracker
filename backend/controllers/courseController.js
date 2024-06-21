const Course = require('../models/courseModel')
const Attendance = require('../models/attendanceModel')
const getCourses = async (req, res) => {
    try {
        console.log("Fetching courses and attendance from database...");
        const courses = await Course.find({});
        const allAttendance = await Attendance.find({});

        // Initialize variables to calculate total attendance percentage, labs missed, and classes missed
        let totalPresentClasses = 0;
        let totalClasses = 0;
        let labsMissed = 0;
        let classesMissed = 0;

        const coursesWithAttendance = courses.map(course => {
            const courseAttendanceRecords = allAttendance.filter(record => record.courseId === course.courseId);
            const courseTotalClasses = courseAttendanceRecords.length;
            const coursePresentClasses = courseAttendanceRecords.filter(record => record.present).length;
            const courseAttendancePercentage = courseTotalClasses ? (coursePresentClasses / courseTotalClasses) * 100 : 0;

            // Accumulate totals for overall statistics
            totalPresentClasses += coursePresentClasses;
            totalClasses += courseTotalClasses;

            // Calculate missed labs and classes
            const missedClasses = courseAttendanceRecords.filter(record => !record.present);
            if (course.islab) {
                labsMissed += missedClasses.length;
            } else {
                classesMissed += missedClasses.length;
            }

            return {
                ...course._doc,
                attendance: `${courseAttendancePercentage.toFixed(2)}%`
            };
        });

        const totalAttendancePercentage = totalClasses ? (totalPresentClasses / totalClasses) * 100 : 0;

        const response = {
            courses: coursesWithAttendance,
            totalAttendancePercentage: `${totalAttendancePercentage.toFixed(2)}%`,
            labsMissed,
            classesMissed
        };

        console.log("Response:", response);

        res.status(200).json(response);
    } catch (error) {
        console.error('Error fetching courses:', error.message);
        res.status(500).json({ error: error.message });
    }
};



const getCourse = async (req, res) => {
    const {id} = req.params
    const course = await Course.findById(id)
    const attendanceAll = await Attendance.find({courseId:course.courseId})
    const classesAttended = attendanceAll.filter(record => record.present).length;
    const classesMissed = attendanceAll.length-classesAttended;
    const percentage = ((classesAttended+classesMissed) ? (classesAttended / (classesAttended+classesMissed)) *100 : 0).toFixed(2);
    const reqClasses = Math.max(0,3*classesMissed-classesAttended);
    const eventList = attendanceAll.map(record => ({
        title: record.present ? "present" : "absent",
        start: record.date,
        end: record.date,
        allDay: true,
        resource: record.present
    }));

    if (!course) {
        return res.status(404).json({error: 'No such course'})
    }
    res.status(200).json({course, attendanceAll, stats:{percentage, classesMissed, classesAttended, reqClasses},eventList})
}

const createCourse = async (req, res) => {
    const { courseId, courseName, semester, isLab } = req.body;

    try {
        // Validate incoming data against Mongoose schema
        if (!courseId || !courseName || !semester || typeof isLab !== 'boolean') {
            throw new Error('Invalid data format');
        }

        if (Course.find({courseId:courseId})) {
            throw new Error('Course with same ID already exists');
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
    const { date, present } = req.body;

    try {
        const existingAttendance = await Attendance.findOne({ courseId: course.courseId, date });

        if (existingAttendance) {
            return res.status(400).json({ error: "Attendance for this date already exists." });
        }

        const attendance = await Attendance.create({ courseId: course.courseId, date, present });
        res.status(200).json(attendance);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const updateAttendance = async (req, res) => {
    const { id } = req.params;
    const course = await Course.findById(id);
    const { date, present } = req.body;

    try {
        const existingAttendance = await Attendance.findOne({ courseId: course.courseId, date });

        if (!existingAttendance) {
            return res.status(400).json({ error: "No attendance record found for this date." });
        }

        // Update the existing attendance record
        const attendance = await Attendance.findOneAndUpdate(
            { courseId: course.courseId, date },
            { present },
            { new: true } 
        );

        res.status(200).json(attendance);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = {
    createCourse,
    getCourses,
    getCourse,
    deleteCourse,
    addAttendance,
    updateAttendance
}