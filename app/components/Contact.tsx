"use client";
import { slideIn } from "@/app/utils/motion";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { SectionWrapper } from "./HigherOrderComponents";
import { EarthCanvas } from "./canvas";

const Contact = () => {
	const formRef = useRef<HTMLFormElement>(null);

	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		emailjs
			.send(
				"service_91ssn8g",
				"template_jjegxdr",
				{
					from_name: form.name,
					to_name: "Saniya Singhal",
					from_email: form.email,
					to_email: "saniyasinghal10@gmail.com",
					message: form.message,
				},
				"VeFeVdEHL9F9_i6xp",
			)
			.then(() => {
				setLoading(false);
				alert(
					"Thanks for reaching out! I’ll respond shortly.-",
				);
				setForm({
					name: "",
					email: "",
					message: "",
				});
			})
			.catch((error) => {
				setLoading(false);
				alert("Sorry!! Something went wrong!!");
			});
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-6 sm:gap-8 md:gap-10 overflow-hidden w-full">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] min-w-0 w-full bg-black-100 p-5 xs:p-6 sm:p-7 md:p-8 rounded-2xl"
			>
				<p className="heroSubText">Get in Touch</p>
				<h2 className="heroHeadText">Contact</h2>
				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-8 sm:mt-10 md:mt-12 flex flex-col gap-5 sm:gap-6 md:gap-8"
				>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-2 sm:mb-4 text-sm sm:text-base">Name</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="Your Name"
							className="bg-tertiary py-3 px-4 sm:py-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-base min-h-[44px]"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-2 sm:mb-4 text-sm sm:text-base">Email Address</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="Your Email Address"
							className="bg-tertiary py-3 px-4 sm:py-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-base min-h-[44px]"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-2 sm:mb-4 text-sm sm:text-base">Message</span>
						<textarea
							rows={5}
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="How can I help you?"
							className="bg-tertiary py-3 px-4 sm:py-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-base min-h-[120px] sm:min-h-[140px] resize-y"
						/>
					</label>
					<button
						type="submit"
						className="bg-tertiary py-3 px-6 sm:px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl min-h-[44px] text-sm sm:text-base"
					>
						{loading ? "Sending..." : "Send message"}
					</button>
				</form>
			</motion.div>
			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto w-full h-[280px] xs:h-[320px] sm:h-[380px] md:h-[450px] lg:h-[550px] min-h-[200px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");