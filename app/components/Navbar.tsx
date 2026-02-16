"use client";
import { navLinks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ResumeButton from "./ResumeButton";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 100) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`paddingX
			w-full flex items-center py-3 sm:py-5 fixed top-0 z-20 left-0 right-0 ${
				scrolled ? "bg-primary" : "bg-transparent"
			}`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div
					className="flex items-center gap-1 sm:gap-2 min-w-0"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<Link href="https://github.com/saniya100305" className="shrink-0">
						<Image
							src="/logo.png"
							width={80}
							height={80}
							alt="logo"
							priority
							className="object-contain w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
						/>
					</Link>
					<p className="text-white text-[14px] xs:text-[16px] sm:text-[18px] font-bold cursor-pointer flex truncate">
					Saniya &nbsp; <span className="sm:block hidden">Singhal</span>
					</p>
				</div>

				<ul className="list-none hidden sm:flex flex-row gap-6 md:gap-8 lg:gap-10">
					{navLinks.map((nav) => (
						// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
						<li
							key={nav.id}
							className={`${
								active === nav.title ? "text-white" : "text-secondary"
							} hover:text-white text-[18px] font-medium cursor-pointer`}
							onClick={() => setActive(nav.title)}
						>
							<Link href={`#${nav.id}`}>{nav.title}</Link>
						</li>
					))}
				</ul>
				<div className="mt-2 lg:block hidden">
					<ResumeButton />
				</div>

				<div className="sm:hidden flex flex-1 justify-end items-center">
					<Image
						src={toggle ? "/close.svg" : "/menu.svg"}
						width={28}
						height={28}
						alt="menu"
						className="w-[28px] h-[28px] object-contain"
						onClick={() => setToggle(!toggle)}
					/>

					<div
						className={`${
							!toggle ? "hidden" : "flex"
						} p-5 black-gradient absolute top-14 right-0 mx-2 xs:mx-4 my-2 min-w-[160px] max-w-[calc(100vw-2rem)] z-10 rounded-xl shadow-xl`}
					>
						<ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
							{navLinks.map((nav) => (
								// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
								<li
									key={nav.id}
									className={`font-poppins font-medium cursor-pointer text-[16px] ${
										active === nav.title ? "text-white" : "text-secondary"
									}`}
									onClick={() => {
										setToggle(!toggle);
										setActive(nav.title);
									}}
								>
									<Link href={`#${nav.id}`}>{nav.title}</Link>
								</li>
							))}
							<li>
								<div className="mt-2">
									<ResumeButton />
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
