const About = () => {
	return (
		<section className="mt-[6em] grid grid-cols-2 gap-6">
			<div className="flex items-center justify-between w-full gap-2 rounded px-7 py-9 text-end">
				<img
					className="w-[20em]"
					src="/src/assets/imgs/summer-plant.png"
					alt="plant"
				/>
				<div className="max-w-[18.25em]">
					<p className="text-[1.1em] font-semibold">
						Summer cactus <br />& succulents
					</p>
					<p className="mt-2 text-grayColor">
						We are an online plant shop offering a wide range of cheap and
						trendy plants
					</p>
					<button
						type="button"
						className="w-[8.75em] h-11 rounded-md bg-primary text-white mt-6">
						Find More
					</button>
				</div>
			</div>
			<div className="flex items-center justify-between w-full gap-2 rounded px-7 py-9 text-end">
				<img
					className="w-[20em]"
					src="/src/assets/imgs/trend-plant.png"
					alt="plant"
				/>
				<div className="max-w-[18.25em]">
					<p className="text-[1.1em] font-semibold">
						Styling Trends <br />& much more
					</p>
					<p className="mt-2 text-grayColor">
						We are an online plant shop offering a wide range of cheap and
						trendy plants
					</p>
					<button
						type="button"
						className="w-[8.75em] h-11 rounded-md bg-primary text-white mt-6">
						Find More
					</button>
				</div>
			</div>
		</section>
	);
};

export default About;
