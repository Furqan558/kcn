import Image from "next/image";
import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import styles from "../styles/slider.module.css";

const Slider = () => {
	const SliderData = [
		{
			image:
				"https://images.unsplash.com/photo-1535224206242-487f7090b5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
		},
		{
			image:
				"https://images.unsplash.com/photo-1469362102473-8622cfb973cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2419&q=80",
		},
		{
			image:
				"https://images.unsplash.com/photo-1594717527389-a590b56e8d0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
		},
		{
			image:
				"https://images.unsplash.com/photo-1484591974057-265bb767ef71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
		},
		{
			image:
				"https://images.unsplash.com/photo-1545917992-dea2d782ef46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2489&q=80",
		},
	];

	const [current, setCurrent] = useState(0);
	const length = SliderData.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (length <= 0) {
		return null;
	}

	return (
		<div id="gallery">
			<h1 className={styles["text-2xl"]}>Gallery</h1>
			<div className={styles["slider-container"]}>
				{SliderData.map((slide, index) => (
					<div
						key={index}
						className={
							index === current
								? `${styles.slide} ${styles.active}`
								: styles.slide
						}
					>
						{index === current && (
							<>
								<FaArrowCircleLeft
									onClick={prevSlide}
									className={`${styles["arrow-icon"]} ${styles.left}`}
									size={50}
								/>
								<Image
									src={slide.image}
									alt="/"
									width="1440"
									height="600"
									objectFit="cover"
								/>
								<FaArrowCircleRight
									onClick={nextSlide}
									className={`${styles["arrow-icon"]} ${styles.right}`}
									size={50}
								/>
							</>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Slider;
