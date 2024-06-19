import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

function NavBar() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

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
                        <div className="section">
                            {isHomePage ? (
                                <ScrollLink className="section" auto spy to="top">Home</ScrollLink>
                            ) : (
                                <RouterLink className="section" to="/">Home</RouterLink>
                            )}
                        </div>
                    </div>
                </div>
                <div className="courses-tab">
                    <div className="courses-wrapper">
                        <div className="link">
                            {isHomePage ? (
                                <ScrollLink auto spy to="my_courses">Courses</ScrollLink>
                            ) : (
                                <RouterLink to="/" className="coursepage-course">Courses</RouterLink>
                            )}
                        </div>
                    </div>  
                </div>
                <div className="new_course-tab">
                    <div className="newcourses-wrapper">
                        <div className="link">
                            {isHomePage ? (
                                <ScrollLink auto spy to="new_course">New Course</ScrollLink>
                            ) : (
                                <RouterLink to="/" className="coursepage-new-course">New Course</RouterLink>
                            )}
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </nav>
    )
};

export default NavBar;
