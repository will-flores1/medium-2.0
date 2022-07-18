import { url } from "inspector";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Banner from "../components/Banner";
import Header from "../components/Header";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";

interface Props {
	posts: Post[];
}

const Home = ({ posts }: Props) => {
	console.log(posts);
	return (
		<div className="max-w-7xl mx-auto">
			<Head>
				<title>Medium 2.0</title>
			</Head>

			<Header />
			<Banner />

			<div className=" grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
				{posts.map((post) => (
					<Link key={post._id} href={`/post/${post.slug.current}`} passHref>
						<div className="border rounded-lg group cursor-pointer overflow-hidden">
							<Image
								className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
								src={urlFor(post.mainImage).url()!}
								alt=""
								height={720}
								width={1280}
							/>
							<div className="flex justify-between p-5 bg-white">
								<div>
									<p className="text-lg font-semibold">{post.title}</p>
									<p className="text-xs">
										{post.description} by {post.author.name}
									</p>
								</div>

								<Image
									className="rounded-full h-12 w-12"
									src={urlFor(post.author.image).url()!}
									layout="intrinsic"
									height={48}
									width={48}
									objectFit="contain"
								/>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Home;

export const getServerSideProps = async () => {
	const query = `
	*[_type == 'post'] {
    _id,
  title,
  author -> {
  name,
  image
  },
  description,
  mainImage,
  slug,
}
`;

	const posts = await sanityClient.fetch(query);

	return {
		props: {
			posts,
		},
	};
};
