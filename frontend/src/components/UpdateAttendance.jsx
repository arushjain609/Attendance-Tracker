import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function UpdateAttendance(){
    const [startDate, setStartDate] = useState(new Date());
    return(
        <div className="AddAttendance">
            <form className="add-attendance">
                <div className="input">
                    <div className="date-option">
                        <label htmlFor="date">Date</label><br />
                        <DatePicker
                            showIcon
                            selected={startDate}
                            onChange={(date) => {
                                setStartDate(date);
                                console.log(startDate);
                            }}
                        />
                        <br/>
                    </div>
                    <div className="attendance-option">
                        <label htmlFor="attendance">Attendance</label><br />
                        <select id="attendance" name="attendance" className="attendance">
                            <option value="none">None</option>
                            <option value="present">Present</option>
                            <option value="absent">Absent</option>
                        </select>
                    </div>
                </div>
                <input type="submit" value="Update" className="UpdateButton"/>
            </form>
        </div>
    );
};

export default UpdateAttendance