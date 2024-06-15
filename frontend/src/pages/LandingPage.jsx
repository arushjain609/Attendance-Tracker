import React from "react";
import NavBar from "../components/NavBar";
import SiteAlert from "../components/siteAlert";
import MyCourses from "../components/MyCourses";
import OverallStats from "../components/OverallStats";
import NewCourse from "../components/NewCourse";
import Footer from "../components/Footer";
import "./LandingPage.css";

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