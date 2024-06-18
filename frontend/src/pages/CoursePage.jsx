import React from "react";
import NavBar from "../components/NavBar";
import { CourseStats } from "../components/CourseStats";
import AddOrUpdate from "../components/AddOrUpdate";
import Footer from "../components/Footer";
import "./CoursePage.css";

function CoursePage() {
    return(
        <div className="course-page">
            <div className="div">
                <NavBar />
                <CourseStats />
                <AddOrUpdate />
                <Footer />
            </div>
        </div>
    );
};

export default CoursePage