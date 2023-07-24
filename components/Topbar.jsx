import React from "react";
import {
	FaPhone,
	FaEnvelope,
	FaFacebook,
	FaTwitter,
	FaInstagram,
} from "react-icons/fa";
import styles from "../styles/topbar.module.css";

const Topbar = () => {
	return (
		<div className={styles.topbar}>
			<div className={styles.leftContent}>
				<div className={styles.icon}>
					<FaPhone />
				</div>
				<div className={styles.contactInfo}>
					<span>+1 123 456 7890</span>
				</div>
				<div className={styles.icon}>
					<FaEnvelope />
				</div>
				<div className={styles.contactInfo}>
					<span>info@example.com</span>
				</div>
			</div>
			<div className={styles.rightContent}>
				<div className={styles.socialIcon}>
					<FaFacebook />
				</div>
				<div className={styles.socialIcon}>
					<FaTwitter />
				</div>
				<div className={styles.socialIcon}>
					<FaInstagram />
				</div>
			</div>
		</div>
	);
};

export default Topbar;
