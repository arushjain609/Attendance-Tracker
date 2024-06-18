import MyCalendar from "./Calendar";

export const CourseStats = () => {
  return (
    <div className="course-stats">
      <div className="frame">
        <div className="overlap-group">
          <div className="text-wrapper">DD104</div>
          <div className="div">Applied Science for Design</div>
        </div>
        <div className="text-wrapper-2">1st Semester</div>
        <button className="button">
          <button className="button-2">Remove Course</button>
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
                    <div className="text-wrapper-4">70%</div>
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
                    <div className="text-wrapper-4">10</div>
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
                    <div className="text-wrapper-4">40</div>
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
                    <div className="text-wrapper-4">5</div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};