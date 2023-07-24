import Head from "next/head";
import Image from "next/image";
// import styles from "./home.module.css";
import Homepage from "@/components/Homepage";

export default function Home() {
	return (
		<div>
			<Head>
				<title>KCN WEBSITE</title>
				<meta name="description" content="KCN Telecommunications Group" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* <main className={styles.main}> */}
			<main>
				<Homepage />
			</main>
		</div>
	);
}
