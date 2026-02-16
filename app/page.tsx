import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
} from "./components";

export default function Home() {
	return (
		<div className="relative z-0 bg-primary font-sans overflow-x-hidden min-h-screen w-full max-w-[100vw]">
			<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
				<Navbar />
				<Hero />
			</div>
			<About />
			<Experience />
			<Tech />
			<Works />
			<Feedbacks />
			<div className="relative z-0">
				<Contact />
				<StarsCanvas />
			</div>
		</div>
	);
}
