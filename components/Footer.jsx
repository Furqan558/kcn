import React from "react";
import styles from "../styles/footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			{/* Container for the first three columns */}
			<div className={styles["column-container"]}>
				<div className={styles.column}>
					{/* 1st Column: Company Logo */}
					<img src="kcn.png" alt="Company Logo" />
				</div>
				<div className={styles.column}>
					{/* 2nd Column: Page Links */}
					<ul>
						<li>
							<a href="">Services</a>
						</li>
						<li>
							<a href="">Solutions</a>
						</li>
						<li>
							<a href="">Products</a>
						</li>
						<li>
							<a href="">Join Our Team</a>
						</li>
					</ul>
				</div>
				<div className={styles.column}>
					{/* 3rd Column: Location of the Office */}
					<p>Location 1: Umme Rammol. NAD ul Hammer Road, Dubai, UAE</p>
					<p>
						Location 2: Office # 04, First Floor, Ahmed Centre, I-8 Markaz
						Islamabad, Pakistan
					</p>
				</div>
			</div>
			{/* Additional bottom section */}
			<div className={styles["bottom-section"]}>
				<div>
					{/* Left side links */}
					<a href="/">Link 1</a>
					<a href="/">Link 2</a>
				</div>
				<p>
					&copy; {new Date().getFullYear()} Your Company. All rights reserved.
				</p>
				<div className={styles["social-icons"]}>
					{/* Social icons */}
					<span className={styles["social-icon"]}>Icon 1</span>
					<span className={styles["social-icon"]}>Icon 2</span>
					<span className={styles["social-icon"]}>Icon 3</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
