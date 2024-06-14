import Course from "./Course"

function MyCourses(){
    const courses = [
        {course_id : "ME 101", course: "Engineering Mechanics", attendance: "7%"},
        {course_id : "CS 101", course: "Introduction to Computing", attendance: "10%"},
        {course_id : "BT 101", course: "Introduction to Biology", attendance: "50%"},
        {course_id : "CS 201", course: "Discrete Mathematics", attendance: "7%"},
        {course_id : "CS 201", course: "Discrete Mathematics", attendance: "7%"},
        {course_id : "BT 101", course: "Introduction to Biology", attendance: "50%"},
        {course_id : "BT 101", course: "Introduction to Biology", attendance: "50%"},
        {course_id : "CS 201", course: "Discrete Mathematics", attendance: "7%"},
        {course_id : "HS 125", course: "Macroeconomics", attendance: "7%"}
    ]

    return (
        <div className="courses" id = "my_courses">
            {/* <a id = "my_courses"></a> */}
            <div className="text-wrapper-2">My Courses</div>
            <Course courses={courses}/>
        </div>
    )
};

export default MyCourses