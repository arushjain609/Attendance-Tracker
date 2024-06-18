import { Link } from "react-scroll";

function NavBar() {
    return(
        <nav className="nav-bar" id="top">
          <div className="overlap-group">
            <header className="header">
              <div className="frame">
                <div className="department-of-web">
                  ATTENDANCE
                  <br />
                  TRACKER
                </div>
              </div>
              <div className="frame-2" />
            </header>
            <div className="tabs">
                <div className="home-tab">
                    <div className="home-wrapper">
                        <div className="section"><Link className="section" auto spy to="top">Home</Link></div>
                    </div>
                </div>
                <div className="courses-tab">
                    <div className="courses-wrapper">
                        <div className="link"><Link auto spy to="my_courses">Courses</Link></div>
                    </div>
                </div>
                <div className="new_course-tab">
                    <div className="newcourses-wrapper">
                        <div className="link"><Link auto spy to="new_course">New Course</Link></div>
                    </div>
                </div>
            </div>
          </div>
        </nav>
    )
};

export default NavBar