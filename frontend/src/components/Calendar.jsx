import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)

function MyCalendar() {
    const start = new Date("2024-06-12");
    const end = new Date("2024-06-14");
    const myEventsList = [ {
        title: "present",
        start: start,
        end: start,
        allDay: true,
        resource: true,
      }];

    return (
        <div className='calendar-box'>
            <Calendar
            views={['month']}
            localizer={localizer}
              events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 350 }}
            />
        </div>
    );
};

export default MyCalendar