import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Header from "../components/Header";

const Home: NextPage = () => {
	return (
		<div className="max-w-7xl mx-auto">
			<Head>
				<title>Medium 2.0</title>
			</Head>

			<Header />
			<Banner />

			{/* Posts */}
		</div>
	);
};

export default Home;
