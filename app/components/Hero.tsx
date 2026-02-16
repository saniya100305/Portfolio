"use client";
import { motion } from "framer-motion";
import React from "react";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	return (
		<section className="relative w-full min-h-screen h-screen max-h-[100dvh] mx-auto">
			<div className="paddingX absolute inset-0 top-[72px] xs:top-[88px] sm:top-[100px] md:top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-3 sm:gap-5">
				<div className="flex flex-col justify-center items-center mt-2 sm:mt-5 shrink-0">
					<div className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]" />
					<div className="w-0.5 xs:w-1 sm:h-72 md:h-80 h-32 xs:h-40 violet-gradient" />
				</div>
				<div className="min-w-0 flex-1">
					<h2 className="heroHeadText text-white break-words">
						Hey, I&apos;m <span className="text-[#915EFF]">Saniya</span>
					</h2>
					<p className="heroSubText mt-1">
						A Software Engineer
					</p>
				</div>
			</div>
			<ComputersCanvas />
			<div className="absolute bottom-6 xs:bottom-4 sm:bottom-2 w-full flex justify-center items-center pointer-events-none">
				<a href="#about" className="pointer-events-auto">
					<div className="w-[28px] h-[52px] xs:w-[35px] xs:h-[64px] rounded-3xl border-2 xs:border-4 border-secondary flex justify-center items-start p-1.5 xs:p-2">
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Number.POSITIVE_INFINITY,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
