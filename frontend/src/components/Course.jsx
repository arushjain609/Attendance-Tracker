function Course(courses) {
    
    return (
        <div className="my-courses">
            {
                courses.courses.map((course) => (
                    <div className="course-card">
                        <div className="overlap-7">
                        <div className="overlap-8">
                            <div className="text-wrapper-5">{course.courseId}</div>
                            <div className="pie-chart-5">
                            <div className="overlap-group-2">
                                <div className="ellipse"></div>
                                <div className="text-wrapper-4">{course.attendance}</div>
                            </div>
                            </div>
                        </div>
                        <div className="text-wrapper-8">{course.courseName}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

export default Course