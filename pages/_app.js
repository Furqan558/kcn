import "../styles/globals.css";
import "node_modules/bootstrap/dist/css/bootstrap.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Topbar />
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
