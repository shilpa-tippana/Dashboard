import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Card } from "react-bootstrap";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class CalendarData extends Component {
  state = {
    events: [
      {
        id: 1,
        start: moment().toDate(),
        end: moment()
          .add(1, "days")
          .toDate(),
        title: "Some title"
      },
      {
        id: 2,
        title: "Smelly Pillow Fight",
        start: new Date(2022, 1, 16, 8, 0, 0, 0),
        end: new Date(2022, 1, 16, 11, 0, 0, 0),
        type: "global"
      },
      {
        id: 3,
        title: "Buggalo Riding",
        start: new Date(2022, 1, 17, 8, 0, 0, 0),
        end: new Date(2022, 1, 17, 11, 0, 0, 0),
        type: "martian"
      },
      {
        id: 4,
        title: "Weirdos Watching",
        start: new Date(2022, 2, 2, 8, 0, 0, 0),
        end: new Date(2022, 2, 2, 11, 0, 0, 0),
        type: "regional"
      },
      {
        id: 3,
        title: "Monkey Knife Fight",
        start: new Date(2018, 3, 27, 8, 0, 0, 0),
        end: new Date(2018, 3, 27, 10, 0, 0, 0),
        type: "underground"
      },
      {
        id: 4,
        title: "Big Cat Sledding",
        start: new Date(2022, 1, 27, 10, 0, 0, 0),
        end: new Date(2022, 1, 27, 12, 0, 0, 0),
        type: "global"
      },
      {
        id: 5,
        title: "Young Executives Riding",
        start: new Date(2022, 1, 27, 3, 0, 0, 0),
        end: new Date(2022, 1, 27, 6, 0, 0, 0),
        type: "regional"
      }
    ]
  };

  render() {
    return (
      <div>
        <Card className="text-left " style={{ height: "80vh" }} >
          <Card.Header >Calendar</Card.Header>
          <Card.Body>
            <Calendar
              localizer={localizer}
              defaultDate={new Date()}
              defaultView="month"
              events={this.state.events}
              // style={{ height: "vh" }}
              eventPropGetter={
                (event, start, end, isSelected) => {
                  let newStyle = {
                    backgroundColor: "#508FF4",
                    color: 'black',
                    borderRadius: "0px",
                    border: "none"
                  };

                  if (event.title == 'Weirdos Watching') {
                    newStyle.backgroundColor = "#1BC167"
                  }
                  if (event.title == 'Young Executives Riding') {
                    newStyle.backgroundColor = "#508FF4"
                  }
                  if (event.title == 'Big Cat Sledding') {
                    newStyle.backgroundColor = "#ED4C4C"
                  }
                  return {
                    className: "",
                    style: newStyle
                  };
                }
              }
            />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default CalendarData;