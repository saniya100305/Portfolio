"use client";
import React, { useEffect, useState } from "react";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 768px)");
		setIsMobile(mediaQuery.matches);

		const handleChange = (event: MediaQueryListEvent) => {
			setIsMobile(event.matches);
		};

		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	return (
		<section className="relative w-full h-screen mx-auto min-w-0 overflow-hidden">
			<div className="paddingX absolute inset-0 top-[100px] max-md:top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-3 max-sm:gap-2">
				<div className="flex flex-col justify-center items-center mt-5 max-sm:mt-2 shrink-0">
					<div className="w-5 h-5 max-sm:w-4 max-sm:h-4 rounded-full bg-[#915EFF]" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>

				<div className="min-w-0 flex-1">
					<h1 className="heroHeadText text-white max-sm:text-[32px] max-[380px]:text-[28px] break-words">
						Hey, I&apos;m <span className="text-[#915EFF]">Saniya</span>
					</h1>
					<p className="heroSubText max-sm:text-[12px]">
						A Software Engineer
					</p>
				</div>
			</div>

			{/* ✅ Disable heavy 3D on mobile */}
			{!isMobile && <ComputersCanvas />}
			{isMobile && (
				<div
					className="hero-mobile-visual"
					aria-hidden="true"
				>
					<div className="hero-mobile-visual__inner">
						<div className="hero-mobile-card hero-mobile-card--left" />
						<div className="hero-mobile-card hero-mobile-card--right" />
					</div>
				</div>
			)}
		</section>
	);
};

export default Hero;
