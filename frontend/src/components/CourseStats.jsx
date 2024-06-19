import MyCalendar from "./Calendar";
import axios from 'axios';
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export const CourseStats = () => {
  const navigateTo = useNavigate();

  const [courseName, setCourseName] = useState('');
  const [courseId, setCourseId] = useState('');
  const [semester, setSemester] = useState(0);
  const [attendanceAll, setAttendanceAll] = useState([]);
  const [classesMissed, setClassesMissed] = useState(0);
  const [classesAttended, setClassesAttended] = useState(0);
  const [classesRequired, setClassesRequired] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const {id} = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/course/${id}`)
    .then((response) => {
        setCourseId(response.data.course.courseId);
        setCourseName(response.data.course.courseName);
        setSemester(response.data.course.semester);
        setAttendanceAll(response.data.attendanceAll);
        setClassesMissed(response.data.stats.classesMissed);
        setClassesAttended(response.data.stats.classesAttended);
        setClassesRequired(response.data.stats.reqClasses);
        setPercentage(response.data.stats.percentage);
      }).catch((error) => {
        alert('ERRORR!!');
        console.log(error);
      });
  }, [])

  const deleteCourse = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/course/${id}`);
      if (response.status === 200) {
        alert('Course deleted successfully!');
        navigateTo("/");
      } else {
        throw new Error('Failed to delete course');
      }
    } catch (error) {
      console.error('Error deleting course:', error.message);
      alert('Failed to delete course. Please try again.');
    }
  };

  return (
    <div className="course-stats">
      <div className="frame">
        <div className="overlap-group">
          <div className="text-wrapper">{courseId}</div>
          <div className="div">{courseName}</div>
        </div>
        <div className="text-wrapper-2">{semester} Semester</div>
        <button className="button">
          <button className="button-2" onClick={deleteCourse}>Remove Course</button>
        </button>
      </div>
      <div className="calendar">
        <MyCalendar />
      </div>
      <div className="stats">
        <div className="frame-2">
            <div className="overlap">
            <div className="text-wrapper-3">Your Attendance</div>
            <div className="pie-chart">
                <div className="overlap-group-2">
                    <div className="ellipse" />
                    <div className="text-wrapper-4-attendance">{percentage}%</div>
                </div>
            </div>
            </div>
        </div>
        <div className="frame-2">
            <div className="overlap">
            <div className="text-wrapper-3">Classes Missed</div>
            <div className="pie-chart">
                <div className="overlap-group-2">
                    <div className="ellipse" />
                    <div className="text-wrapper-4">{classesMissed}</div>
                </div>
            </div>
            </div>
        </div>
        <div className="frame-2">
            <div className="overlap">
            <div className="text-wrapper-3">Classes Attended</div>
            <div className="pie-chart">
                <div className="overlap-group-2">
                    <div className="ellipse" />
                    <div className="text-wrapper-4">{classesAttended}</div>
                </div>
            </div>
            </div>
        </div>
        <div className="frame-2">
            <div className="overlap">
            <div className="text-wrapper-3">Required Classes</div>
            <div className="pie-chart">
                <div className="overlap-group-2">
                    <div className="ellipse" />
                    <div className="text-wrapper-4">{classesRequired}</div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};
