import AddAttendance from "./AddAttendance";
import UpdateAttendance from "./UpdateAttendance";
import { useState } from 'react';


function AddOrUpdate(){
    const [AddOrUpdate, SetAddOrUpdate] = useState("Add"); 
    const handleRadioChange = (event) => {
        SetAddOrUpdate(event.target.value);
    };
    return(
        <div className="AddOrUpdate">
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" value="Add" autocomplete="off" onChange={handleRadioChange} checked={AddOrUpdate==="Add"}/>
                <label class="btn btn-outline-primary" for="btnradio1"><strong>Add Attendance</strong></label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" value="Update" autocomplete="off" onChange={handleRadioChange} checked={AddOrUpdate==="Update"}/>
                <label class="btn btn-outline-primary" for="btnradio2"><strong>Update Attendance</strong></label>
            </div>
            <div className="addupdateform">
                {(AddOrUpdate==="Add") && <AddAttendance/>}
                {(AddOrUpdate==="Update") && <UpdateAttendance/>}
            </div>
        </div>
    );
};

export default AddOrUpdate