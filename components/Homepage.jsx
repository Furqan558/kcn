import React from "react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Whyus from "./Whyus";
import Cta from "./Cta";
import Facts from "./Facts";
import Portfolio from "./Portfolio";
import Partners from "./Partners";
import Clients from "./Clients";
import Testimonials from "./Testimonials";
import Map from "./Map";
// import Slider from "./Slider";
// import { SliderData } from "../components/SliderData";

const Homepage = () => {
	return (
		<div>
			<Hero />
			<About />
			<Services />
			<Whyus />
			<Cta />
			<Facts />
			<Portfolio />
			{/* <Slider /> */}
			{/* <Carousel /> */}
			<Partners />
			<Clients />
			<Testimonials />
			<Map />
		</div>
	);
};

export default Homepage;
