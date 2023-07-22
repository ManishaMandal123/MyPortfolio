import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#45165d">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2004 - 2017"
          iconStyle={{ background: "#45165d", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Prabharani Public School, Murshidabad , West Bengal
          </h3>
          <p> Secondary Education</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="20017 - 2019"
          iconStyle={{ background: "#45165d", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Prabharani Public School, Murshidabad , West Bengal
          </h3>
          <p> Higher Secondary Education</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Murshidabad College Of Engineering and Technology
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
     
      </VerticalTimeline>
    </div>
  );
}

export default Experience;