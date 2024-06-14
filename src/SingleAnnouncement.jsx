function SingleAnn(props){
    const announcements = props.announcements;

    return (
        <div className="frame-10">
            {
                announcements.map((ann) => (
                    <div className="frame-wrapper">
                        <div className="frame-11">
                            <div className="ann-head">
                                <div className="time">{ann.time}</div>
                                <div className="frame-12">
                                <div className="frame-13">
                                    <div className="text-wrapper-14">{ann.course_id}</div>
                                    <div className="text-wrapper-15">{ann.instructor}</div>
                                </div>
                                </div>
                            </div>
                            <div className="text-wrapper-16">{ann.message}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

export default SingleAnn