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
      <div className="bg-tertiary rounded-3xl p-8 max-md:p-6 max-sm:p-4 h-full flex flex-col min-w-0">
        
        {/* Quote Icon */}
        <div className="w-12 h-12 max-sm:w-10 max-sm:h-10 rounded-full bg-gradient-to-r from-[#915EFF] to-[#915EFF]/60 
                        flex items-center justify-center mb-6 max-sm:mb-4">
          <p className="text-white font-black text-[24px] max-sm:text-[20px]">&quot;</p>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col min-w-0">
          <p className="text-white/90 tracking-wide text-[15px] max-sm:text-[14px] leading-relaxed 
                        flex-1 min-h-[120px] max-sm:min-h-[100px] font-light">
            {testimonial}
          </p>

          {/* Footer */}
          <div className="mt-8 pt-6 max-sm:mt-6 max-sm:pt-4 border-t border-white/10 
                          flex justify-between items-center gap-2">
            <div className="flex flex-col min-w-0">
              <p className="text-white font-semibold text-[16px] max-sm:text-[14px]">
                <span className="text-[#915EFF]">@</span>
                {name}
              </p>
            </div>

            <Link href={link} target="_blank" className="shrink-0" aria-label={`View ${name} profile`}>
              <div className="w-12 h-12 max-sm:w-11 max-sm:h-11 min-w-[44px] min-h-[44px] rounded-full bg-black-200/50
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
      <div className="paddingX mt-12 pb-20 max-md:mt-8 max-md:pb-12 max-sm:mt-6 max-sm:pb-10
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                gap-8 max-md:gap-6 max-sm:gap-4 max-w-7xl mx-auto items-stretch min-w-0">

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