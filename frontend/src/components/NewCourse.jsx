import { useState } from 'react';

function NewCourse() {
    const [courseCode, setCourseCode] = useState('');
    const [courseName, setCourseName] = useState('');
    const [semester, setSemester] = useState('');
    const [isLab, setIsLab] = useState(false); 

    const handleRadioChange = (event) => {
        setIsLab(event.target.value === 'Lab');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            courseId: courseCode,
            courseName,
            semester: Number(semester),
            isLab
        };
        console.log(formData)
        
        try {
            const response = await fetch('http://localhost:3000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to add new course');
            }

            // Reset form fields after successful submission
            setCourseCode('');
            setCourseName('');
            setSemester('');
            setIsLab(false); 
            window.location.reload();
            alert('Course added successfully!');
        } catch (error) {
            console.error('Error adding course:', error.message);
            alert(error.message);
        }
        
    };

    return (
        <div className="new-course" id="new_course">
            <div className="text-wrapper-newcourse">Add New Course</div>
            <form onSubmit={handleSubmit} className="NewCoursehtmlForm">
                <div className="course-detail">
                    <div className="course_id">
                        <label htmlFor="CourseCode">Course Code</label><br />
                        <input
                            type="text"
                            id="CourseCode"
                            name="CourseCode"
                            value={courseCode}
                            onChange={(e) => setCourseCode(e.target.value)}
                        />
                    </div>
                    <div className="course_name">
                        <label htmlFor="CourseName">Course Name</label><br />
                        <input
                            type="text"
                            id="CourseName"
                            name="CourseName"
                            value={courseName}
                            onChange={(e) => setCourseName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="sem-lab-details">
                    <div className="sem">
                        <label htmlFor="Semester">Semester</label>
                        <input
                            type="number"
                            id="Semester"
                            name="Semester"
                            value={semester}
                            onChange={(e) => setSemester(e.target.value)}
                        />
                    </div>
                    <div className="lab-options">
                        <input
                            type="radio"
                            id="isLab"
                            name="isLab"
                            value="Lab"
                            checked={isLab}
                            onChange={handleRadioChange}
                        />
                        <label htmlFor="isLab">Lab</label><br/>
                        <input
                            type="radio"
                            id="isClass"
                            name="isLab"
                            value="Class"
                            checked={!isLab}
                            onChange={handleRadioChange}
                        />
                        <label htmlFor="isClass">Class</label><br/>
                    </div>
                </div>
                <input type="submit" value="Add" className="AddButton"/><br />
            </form>
        </div>
    );
}

export default NewCourse;
