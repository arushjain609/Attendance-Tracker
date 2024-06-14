function NewCourse (){
    return (
        <div className="new-course" id="new_course">
            <div className="text-wrapper-newcourse">Add New Course</div>
            <form action="" className="NewCourseForm">
                <div className="course-detail">
                    <div className="course_id">
                        <label for="CourseCode">Course Code</label><br />
                        <input type="text" id="CourseCode" name="CourseCode" />
                    </div>
                    <div className="course_name">
                        <label for="CourseName">Course Name</label><br />
                        <input type="text" id="CourseName" name="CourseName" />
                    </div>
                </div>
                <div className="sem-lab-details">
                    <div className="sem">
                        <label for="Semester">Semester</label>
                        <input type="number" id="Semester" name="Semester" />
                    </div>
                    <div className="lab-options">
                        <input type="radio" id="isLab" name="isLab" value="Lab"/>
                        <label for="isLab">Lab</label><br/>
                        <input type="radio" id="isClass" name="isLab" value="Class"/>
                        <label for="isClass">Class</label><br/>
                    </div>
                </div>
                <input type="submit" value="Add" className="AddButton"/><br />
            </form>
        </div>
    );
}

export default NewCourse