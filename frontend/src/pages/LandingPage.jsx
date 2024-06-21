import React from "react";
import NavBar from "../components/NavBar";
import SiteAlert from "../components/siteAlert";
import MyCourses from "../components/MyCourses";
import OverallStats from "../components/OverallStats";
import NewCourse from "../components/NewCourse";
import Footer from "../components/Footer";
import "./LandingPage.css";
import { useEffect,useState } from "react";


export const LandingPage = () => {
  
  const [overall, setOverall] = useState(0)

  function makeInt(percentageString) {
    const numericString = percentageString.replace('%', '');    
    const integerValue = parseInt(numericString, 10);
    return integerValue;
}


  useEffect(() =>{
      const fetchOverall = async () => {
          try {

              const response = await fetch('http://localhost:3000/')
              const json = await response.json()
              if (response.ok) {
                  setOverall(makeInt(json.totalAttendancePercentage))
              }
          } catch (error) {
              console.log(error)
          }
      }
      fetchOverall()
  },[])


  return (
    <div className="landing-page">
      <div className="div">
       <NavBar />
        {overall<75 && <SiteAlert />}
        <br />
        <p className="hello-arush-jain">
          <span className="text-wrapper">Welcome!</span>
        </p>
        <OverallStats OverallStats={overall}/>
        <div className="MyCourses"><MyCourses /></div>
        <NewCourse />
        {/* <br/> */}
        {/* <Announcements /> */}
        <Footer />
      </div>
    </div>
  );
};