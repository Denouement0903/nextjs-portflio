
"use client";
import React from "react";
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

function TimelineLayout() {
  return (
    <div className="lg:overflow-y-auto lg:h-96">
    <Timeline>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>Jan 2017 - Dec 2021</Timeline.Time>
          <Timeline.Title>Student</Timeline.Title>
          <Timeline.Body>
          I started Highschool at Villiersdorp Secondary School and matriculated with a Bachelors pass. 
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>Mar 2021 - Feb 2022</Timeline.Time>
          <Timeline.Title>IT Assistant Manager</Timeline.Title>
          <Timeline.Body>
          I acquired my first hands-on job experience at a company called Tech Nasty.
          <br />
          My reason for leaving was the indefinite closure of Tech Nasty due to Covid-19.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>Sep 2022 - Mar 2023</Timeline.Time>
          <Timeline.Title>Student / Intern developer</Timeline.Title>
          <Timeline.Body>
          I attended a year long coding boot camp at Life Choices Academy together with  Life Choices Academy Studio.
          <br />
          Through a series of projects, I demonstrated my proficiency in web development,
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>Mar 2023 - Jun 2023</Timeline.Time>
          <Timeline.Title>Assistant Lecturer</Timeline.Title>
          <Timeline.Body>
          In this role, I actively assist with lesson delivery, schedule planning,
          <br />
          and ensuring students have access to the most up-to-date study materials. 
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>Jun 2023 - Present</Timeline.Time>
          <Timeline.Title>Software Developer</Timeline.Title>
          <Timeline.Body>
          The current role I have has helped me acquire a diverse skill set encompassing coding, business acumen, and management.
          <br />
          My journey at Databalk has been enriched by engaging in hands-on project-driven experiences.
          <br />
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
    </div>
  );
}

export default TimelineLayout