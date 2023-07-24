import Link from "next/link";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import styles from "../styles/Header.module.css";
// import Navbar from "./Navbar";

const Header = () => {
	// State to track the visibility of the mega menu
	const [showMegaMenu, setShowMegaMenu] = useState(false);

	// Function to toggle the visibility of the mega menu
	const toggleMegaMenu = () => {
		setShowMegaMenu(!showMegaMenu);
	};
	// Dummy data for mega menu categories and items
	const megaMenuData = [
		{
			category: "Category 1",
			items: ["Item 1", "Item 2", "Item 3"],
		},
		{
			category: "Category 2",
			items: ["Item 4", "Item 5", "Item 6"],
		},
	];

	// Function to handle the click on the mega menu items
	const handleMegaMenuClick = (menuItem) => {
		// Replace with the logic to handle the click on the mega menu item
		console.log(`Clicked on Mega Menu Item: ${menuItem}`);
	};

	return (
		<header className={styles.header}>
			{/* Logo */}
			<div className={styles.logo}>
				<img src="kcn.png" alt="Company Logo" width="75px" />
			</div>
			{/* Navigation */}
			<nav className={styles.navigation}>
				<ul className={styles.navItems}>
					<li className={styles.navItem}>
						<Link href="/">HOME</Link>
					</li>
					<li className={styles.navItem}>
						<Link href="/services">SERVICES</Link>
					</li>
					<li className={styles.navItem}>
						<Link href="/industries">INDUSTRIES</Link>
					</li>
					<li className={styles.navItem}>
						<Link href="/products">PRODUCTS</Link>
					</li>

					<li className={styles.navItem}>
						<Link href="/technology">TECHNOLOGY</Link>
					</li>
					<li className={styles.navItem}>
						<Link href="/sustainability">SUSTAINABILITY</Link>
					</li>
					<li className={styles.navItem}>
						<Link href="/resources">RESOURCES</Link>
					</li>
					<li className={styles.navItem}>
						<Link href="/about">ABOUT</Link>
					</li>
					<li className={styles.navItem}>
						<Link href="/contact">CONTACT</Link>
					</li>
				</ul>
			</nav>
			{/* CTA */}
			<div className={styles.cta}>
				<a href="/" className={styles.ctaButton}>
					Get Started
				</a>
			</div>
		</header>
	);
};

export default Header;
