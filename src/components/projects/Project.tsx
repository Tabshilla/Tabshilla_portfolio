import React from "react";
import "./Project.css";
import Title from "../layouts/Title";
// import projectOne from "../../assets/images/RIMS.png";
import projectOne from "../../assets/images/DaystarDaycare.png";
// import projectOne from "../../assets/images/RIMS.png";
import projectTwo from "../../assets/images/uplift.png";
import projectThree from "../../assets/images/profile/RIMS.png";
// import projectThree from "../../assets/images/profile/DaystarDaycare.png";
import ProjectCard from "../projects/ProjectCard";

const Project: React.FC = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
      style={{
        width: "100%",
        marginLeft: "0px",
        marginRight: "60px",
        paddingTop: "5px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.50)", // Adding shadow
      }}
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Discover My Latest Projects" des="My Projects" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <ProjectCard
          title="Refactory Information Management System"
          description="An information management system that aims to streamline information in a more clean and manageable way while reducing redunduncy and data loss."
          src={projectThree}
          status="Completed (JS, React, and Nest js)"
          githubLink="https://rims-portal.onrender.com/"
          // render= "https://rims-portal.onrender.com/"
        />

        
        <ProjectCard
          title="Uplift Donation Website"
          description="A platform dedicated to empowering individuals and communities in need by facilitating charitable donations and support initiatives."
          src={projectTwo}
          status="In Progress (Python, Django, JS)"
          githubLink="https://github.com/Tabshilla/life-changingNew.git"
        />
        
        <ProjectCard
          title="Daystar Daycare Web App"
          description="A comprehensive web application for Daystar Daycare, focusing on record keeping and management."
          src={projectOne}
          status="Completed (Python, Django, JS)"
          githubLink="https://github.com/Tabshilla/DaystarDaycare"
        />
        {/* <ProjectCard
          title="Student Attendance Management System"
          description="A system using QR codes for efficient student attendance tracking."
          src={projectThree}
          status="Completed (HTML, CSS, PHP, JS)"
          githubLink="https://github.com/yourusername/student-attendance-management-system" // Replace with actual link
        /> */}
      </div>
    </section>
  );
};

export default Project;
