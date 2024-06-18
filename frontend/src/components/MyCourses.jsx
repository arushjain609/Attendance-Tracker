import Course from "./Course"
import { useEffect, useState} from "react";

function MyCourses(){
    const [courses, setCourses] = useState([])

    useEffect(() =>{
        const fetchCourses = async () => {
            try {

                const response = await fetch('http://localhost:3000/')
                const json = await response.json()
                if (response.ok) {
                    setCourses(json.courses)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchCourses()
    },[])

    
    // const courses = [
    //     {course_id : "ME 101", course: "Engineering Mechanics", attendance: "7%"},
    //     {course_id : "CS 101", course: "Introduction to Computing", attendance: "10%"},
    //     {course_id : "BT 101", course: "Introduction to Biology", attendance: "50%"},
    //     {course_id : "CS 201", course: "Discrete Mathematics", attendance: "7%"},
    //     {course_id : "CS 201", course: "Discrete Mathematics", attendance: "7%"},
    //     {course_id : "BT 101", course: "Introduction to Biology", attendance: "50%"},
    //     {course_id : "BT 101", course: "Introduction to Biology", attendance: "50%"},
    //     {course_id : "CS 201", course: "Discrete Mathematics", attendance: "7%"},
    //     {course_id : "HS 125", course: "Macroeconomics", attendance: "7%"}
    // ]

    return (
        <div className="courses" id = "my_courses">
            <div className="text-wrapper-2">My Courses</div>
            {courses.length > 0 ? (
                <Course courses={courses} />
            ) : (
                <p>Loading courses...</p>
            )}
        </div>
    )
};

export default MyCourses