"use client";
import { SectionWrapper } from "@/app/components/HigherOrderComponents";
import { experiences } from "@/app/constants";
import { textVariant } from "@/app/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type ExperienceCardProps = {
  experience: (typeof experiences)[0];
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={experience.icon}
            width={48}
            height={48}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="min-w-0">
        <h3 className="text-white text-[18px] sm:text-[20px] md:text-[24px] font-bold leading-tight">
          {experience.title}
        </h3>
        <p
          className="text-secondary text-[14px] sm:text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-3 sm:mt-5 list-disc ml-4 sm:ml-5 space-y-1.5 sm:space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[12px] sm:text-[13px] md:text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* Gradient Styled Subtitle */}
       <p className="sectionSubText text-center">
  My Credentials
</p>


        {/* Main Heading */}
        <h2 className="sectionHeadText text-center">
          Certifications & Training
        </h2>
      </motion.div>

      <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col w-full overflow-x-hidden min-w-0">
        <VerticalTimeline className="vertical-timeline-mobile">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");