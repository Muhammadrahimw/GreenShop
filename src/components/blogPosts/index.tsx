const BlogPosts = () => {
	return (
		<section className="mt-[8em]">
			<h2 className="text-[1.75em] font-semibold text-center">Our Blog Posts</h2>
			<p className="mt-2 text-sm text-center">
				We are an online plant shop offering a wide range of cheap and trendy
				plants.
			</p>
			<div className="grid grid-cols-4 mt-8 gap-11">
				<div className="w-full">
					<img
						className="w-full"
						src="/src/assets/imgs/blog-plan-1.jpg"
						alt="blog plant"
					/>
					<div className="px-4 py-2 bg-[#FBFBFB]">
						<p className="text-sm font-medium text-primary">
							September 12 I Read in 6 minutes
						</p>
						<p className="mt-1 text-xl font-bold">
							Cactus & Succulent Care Tips
						</p>
						<p className="mt-1 text-sm text-[#727272]">
							Cacti are succulents are easy care plants for any home or patio.
						</p>
						<div className="flex items-center gap-1 cursor-pointer">
							<p className="mt-2 font-medium">Read More</p>
						</div>
					</div>
				</div>
				<div className="w-full">
					<img src="/src/assets/imgs/blog-plan-2.jpg" alt="blog plant" />
					<div className="px-4 py-2 bg-[#FBFBFB]">
						<p className="text-sm font-medium text-primary">
							September 12 I Read in 6 minutes
						</p>
						<p className="mt-1 text-xl font-bold">
							Cactus & Succulent Care Tips
						</p>
						<p className="mt-1 text-sm text-[#727272]">
							Cacti are succulents are easy care plants for any home or patio.
						</p>
						<div className="flex items-center gap-1 cursor-pointer">
							<p className="mt-2 font-medium">Read More</p>
						</div>
					</div>
				</div>
				<div className="w-full">
					<img src="/src/assets/imgs/blog-plan-3.jpg" alt="blog plant" />
					<div className="px-4 py-2 bg-[#FBFBFB]">
						<p className="text-sm font-medium text-primary">
							September 12 I Read in 6 minutes
						</p>
						<p className="mt-1 text-xl font-bold">
							Cactus & Succulent Care Tips
						</p>
						<p className="mt-1 text-sm text-[#727272]">
							Cacti are succulents are easy care plants for any home or patio.
						</p>
						<div className="flex items-center gap-1 cursor-pointer">
							<p className="mt-2 font-medium">Read More</p>
						</div>
					</div>
				</div>
				<div className="w-full">
					<img src="/src/assets/imgs/blog-plan-4.jpg" alt="blog plant" />
					<div className="px-4 py-2 bg-[#FBFBFB]">
						<p className="text-sm font-medium text-primary">
							September 12 I Read in 6 minutes
						</p>
						<p className="mt-1 text-xl font-bold">
							Cactus & Succulent Care Tips
						</p>
						<p className="mt-1 text-sm text-[#727272]">
							Cacti are succulents are easy care plants for any home or patio.
						</p>
						<div className="flex items-center gap-1 cursor-pointer">
							<p className="mt-2 font-medium">Read More</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogPosts;
