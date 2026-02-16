"use client";
import { technologies } from "@/app/constants";
import { SectionWrapper } from "./HigherOrderComponents";
import { BallCanvas } from "./canvas";

const Tech = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-4 xs:gap-6 sm:gap-8 md:gap-10">
			{technologies.map((technology) => (
				<div className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28" key={technology.name}>
					<BallCanvas icon={technology.icon} />
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, "tech");
