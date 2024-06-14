function OverallStats(props){
    const overall = props.OverallStats;

    return (
        <div className="overall-stats">
          <div className="overall-box">
            <div className="overall-stats-content">
              <div className="div-2">
                <div className="text-wrapper-9">{overall.Attendance}%</div>
                <div className="text-wrapper-10">Average Attendance</div>
              </div>
              <div className="div-2">
                <div className="text-wrapper-9">{overall.LabsMissed}</div>
                <div className="text-wrapper-10">Labs Missed</div>
              </div>
              <div className="div-2">
                <div className="text-wrapper-11">{overall.ClassMissed}</div>
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