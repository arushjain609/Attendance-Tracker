import React from "react";
import NavBar from "./NavBar";
import SiteAlert from "./siteAlert";
import MyCourses from "./MyCourses";
import OverallStats from "./OverallStats";
import NewCourse from "./NewCourse";
// import Announcements from "./Announcements";
import Footer from "./Footer";
// import { Icon } from "./Icon";
import "./style.css";

export const LandingPage = () => {
    const overall = {Attendance:70, LabsMissed:9, ClassMissed:15};

  return (
    <div className="landing-page">
      <div className="div">
        <NavBar />
        {overall.Attendance<75 && <SiteAlert />}
        <br />
        <p className="hello-arush-jain">
          <span className="text-wrapper">Welcome!</span>
        </p>
        <OverallStats OverallStats={overall}/>
        <MyCourses />
        <NewCourse />
        {/* <Announcements /> */}
        <Footer />
      </div>
    </div>
  );
};