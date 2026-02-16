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
					<div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] max-md:px-6 max-md:min-h-[240px] max-sm:px-4 max-sm:py-4 max-sm:min-h-[220px] flex justify-evenly items-center flex-col">
						<Image
							src={icon}
							width={64}
							height={64}
							alt={title}
							className="w-16 h-16 object-contain"
						/>
						<h3 className="text-white text-[20px] max-sm:text-[17px] font-bold text-center">
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
				className="mt-4 text-secondary text-[17px] max-w-[3xl] leading-[30px] max-md:text-[15px] max-md:leading-[26px] max-sm:text-[14px] max-sm:leading-[24px]"
			>
				Dynamic Full-Stack Web Developer with a strong foundation in building scalable and high-performance web applications. Experienced in working with modern technologies including React.js, Node.js, Express.js, and MongoDB. Passionate about designing seamless user experiences and developing efficient backend systems. Strong problem-solving skills supported by consistent practice of Data Structures and Algorithms. Committed to continuous learning and innovation, with a goal to contribute to impactful and technology-driven projects.
			</motion.p>
			<div className="mt-20 flex flex-wrap gap-10 max-md:gap-6 max-md:mt-12 max-sm:gap-4 max-sm:mt-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");