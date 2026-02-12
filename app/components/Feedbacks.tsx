"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Tilt } from "react-tilt";
import { testimonials } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

type FeedbackCardProps = {
  index: number;
  testimonial: string;
  name: string;
  link: string;
  image: string;
};

const FeedbackCard = ({
  index,
  testimonial,
  name,
  link,
  image,
}: FeedbackCardProps) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="w-full"
  >
    <Tilt
      options={{
        max: 25,
        scale: 1.02,
        speed: 450,
      }}
      className="relative bg-tertiary p-[1px] rounded-3xl w-full h-full
                 hover:shadow-2xl transition-all duration-500
                 border border-white/5"
    >
      <div className="bg-tertiary rounded-3xl p-8 h-full flex flex-col">
        
        {/* Quote Icon */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#915EFF] to-[#915EFF]/60 
                        flex items-center justify-center mb-6">
          <p className="text-white font-black text-[24px]">&quot;</p>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <p className="text-white/90 tracking-wide text-[15px] leading-relaxed 
                        flex-1 min-h-[120px] font-light">
            {testimonial}
          </p>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 
                          flex justify-between items-center">
            <div className="flex flex-col">
              <p className="text-white font-semibold text-[16px]">
                <span className="text-[#915EFF]">@</span>
                {name}
              </p>
            </div>

            <Link href={link} target="_blank">
              <div className="w-12 h-12 rounded-full bg-black-200/50
                              backdrop-blur-sm border border-white/10
                              flex items-center justify-center
                              hover:scale-110 hover:border-[#915EFF]/50 hover:bg-[#915EFF]/10
                              transition-all duration-300 cursor-pointer
                              group">
                <Image
                  src={image}
                  width={24}
                  height={24}
                  alt={`feedback by ${name}`}
                  className="w-6 h-6 object-contain group-hover:scale-110 transition-transform"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-16 bg-black-100 rounded-[20px]">
      {/* Header Section */}
      <div className="padding bg-tertiary rounded-2xl">
        <motion.div variants={textVariant()}>
          <h2 className="sectionHeadText">Social Profiles</h2>
          <p className="sectionSubText">
            Click on social media icons to check out..
          </p>
        </motion.div>
      </div>

      {/* Cards Section */}
      <div className="paddingX mt-12 pb-20 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                gap-8 max-w-7xl mx-auto items-stretch">

        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.id}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");