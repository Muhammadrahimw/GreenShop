const Products = () => {
	return (
		<div className="w-full tracking-wide text-blackColor">
			<div className="flex items-center justify-between gap-4">
				<div className="flex items-center justify-between gap-10">
					<p className="font-semibold cursor-pointer text-primary hover-underline-animation2">
						All Plants
					</p>
					<p className="cursor-pointer hover-underline-animation2">
						New Arrivals
					</p>
					<p className="cursor-pointer hover-underline-animation2">Sale</p>
				</div>
				<div className="flex items-center gap-2">
					<p>Short by:</p>
					<div className="flex items-center gap-2">
						<p>Default sorting</p>
						<select
							className="cursor-pointer"
							title="Default sorting"
							name="sorting"
							id="">
							<option value="1"></option>
							<option value="2"></option>
						</select>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-10 mt-10 gap-y-[4.75em]">
				{Array.from({length: 9}, (_, index) => (
					<div key={index}>
						<div
							style={{
								backgroundImage: `url('/src/assets/imgs/plant-${index}.png')`,
								backgroundRepeat: "no-repeat",
								backgroundSize: "contain",
								backgroundPosition: "center",
							}}
							className="w-full h-[18.75em] cursor-pointer"></div>
						<p className="mt-3">Barberton Daisy</p>
						<p className="text-[1.15em] font-semibold text-primary">$119.00</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Products;
