import SingleAnn from "./SingleAnnouncement";

function Announcements(){
    const announcements = [
        {course_id : 'CS 201', instructor : 'Sushanta Karmakar', message : 'No Class Today!', time: '22/10/23 10:59 AM'},
        {course_id : 'CS 223', instructor : 'Heemangi Kapoor', message : 'Bring pencil for your quiz tomorrow. All the best!', time: '15/2/24 7:45 PM'},
        {course_id : 'CS 223', instructor : 'Heemangi Kapoor', message : 'Bring pencil for your quiz tomorrow. All the best!', time: '15/2/24 7:45 PM'}
    ];

    return (
        <div className="announcements">
            <a  id = "announce"></a>
          <div className="overlap-10">
            <div className="text-wrapper-12">Announcements</div>
            <div className="announcements-frame">
              <div className="frame-9">
                <div className="text-wrapper-13">Most Recent</div>
              </div>
              <SingleAnn announcements={announcements}/>
            </div>
          </div>
        </div>
    )  
};

export default Announcements