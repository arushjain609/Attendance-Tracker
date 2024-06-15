import { useState, useEffect } from "react";

function OverallStats(){
  const [overall, setOverall] = useState([])

  useEffect(() =>{
      const fetchOverall = async () => {
          try {

              const response = await fetch('http://localhost:3000/')
              const json = await response.json()
              if (response.ok) {
                  setOverall({
                    totalAttendancePercentage: json.totalAttendancePercentage,
                    labsMissed: json.labsMissed,
                    classesMissed: json.classesMissed
                });
                
              }
          } catch (error) {
              console.log(error)
          }
      }
      fetchOverall()
  },[])

    return (
        <div className="overall-stats">
          <div className="overall-box">
            <div className="overall-stats-content">
              <div className="div-2">
                <div className="text-wrapper-9">{overall.totalAttendancePercentage}</div>
                <div className="text-wrapper-10">Average Attendance</div>
              </div>
              <div className="div-2">
                <div className="text-wrapper-9">{overall.labsMissed}</div>
                <div className="text-wrapper-10">Labs Missed</div>
              </div>
              <div className="div-2">
                <div className="text-wrapper-11">{overall.classesMissed}</div>
                <div className="text-wrapper-10">Classes Missed</div>
              </div>
            </div>
            <div className="div-3" />
            <div className="div-4" />
          </div>
        </div>
    )
};

export default OverallStats