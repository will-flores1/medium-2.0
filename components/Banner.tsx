import React from "react";
import Image from "next/image";

function Banner() {
	return (
		<div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
			<div className="px-10 space-y-5">
				<h1 className="text-6xl max-w-xl font-serif">
					<span className="underline decoration-black decoration-4">
						Medium
					</span>{" "}
					is a place to write, read, and connect.
				</h1>
				<h2>
					It's easy and free to post your thoughts on any topic and connect with
					millions of readers.
				</h2>
			</div>

			<div className="hidden md:inline-flex h-42 lg:h-full">
				<Image
					className="hidden md:inline-flex h-32 lg:h-full"
					src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
					width={500}
					height={500}
					alt=""
				/>
			</div>
		</div>
	);
}

export default Banner;
