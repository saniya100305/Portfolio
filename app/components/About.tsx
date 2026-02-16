"use client";

import { SectionWrapper } from "./HigherOrderComponents";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";

type ServiceCardProps = {
	index: number;
	title: string;
	icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
	return (
		<>
			<Tilt
				options={{ max: 45, scale: 1, speed: 450 }}
				className="xs:w-[250px] w-full"
			>
				<motion.div
					variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
					className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
				>
					<div className="bg-tertiary rounded-[20px] py-4 px-6 xs:py-5 xs:px-8 sm:px-10 md:px-12 min-h-[220px] sm:min-h-[260px] md:min-h-[280px] flex justify-evenly items-center flex-col">
						<Image
							src={icon}
							width={64}
							height={64}
							alt={title}
							className="w-16 h-16 object-contain"
						/>
						<h3 className="text-white text-[16px] sm:text-[18px] md:text-[20px] font-bold text-center">
							{title}
						</h3>
					</div>
				</motion.div>
			</Tilt>
		</>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText">Introduction</p>
				<h4 className="sectionHeadText">
					Overview
				</h4>


			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[14px] sm:text-[16px] md:text-[17px] max-w-3xl leading-relaxed"
			>
				Dynamic Full-Stack Web Developer with a strong foundation in building scalable and high-performance web applications. Experienced in working with modern technologies including React.js, Node.js, Express.js, and MongoDB. Passionate about designing seamless user experiences and developing efficient backend systems. Strong problem-solving skills supported by consistent practice of Data Structures and Algorithms. Committed to continuous learning and innovation, with a goal to contribute to impactful and technology-driven projects.
			</motion.p>
			<div className="mt-12 sm:mt-16 md:mt-20 flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-8 md:gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");