import {Carousel} from "antd";
import bgImage from "/src/assets/imgs/bg-image.png";

const Showcase: React.FC = () => {
	return (
		<div className="mt-12">
			<Carousel autoplay className="py-[4em] px-10 w-full">
				<div style={{backgroundImage: `url(${bgImage})`}} className="w-full">
					<div className="w-[36em] bg-[url(`/src/assets/imgs/bg-image.png`)] bg-no-repeat bg-center bg-contain">
						<p className="text-xl tracking-wider">Welcome to GreenShop</p>
						<h1 className="text-[4.3em] font-extrabold tracking-wide leading-none text-blackColor my-1">
							LET'S MAKE A BETTER <span className="text-primary">PLANET</span>
						</h1>
						<p className="text-blackColor">
							We are an online plant shop offering a wide range of cheap and
							trendy plants. Use our plants to create an unique Urban Jungle.
							Order your favorite plants!
						</p>
					</div>
				</div>
				{/* <>
					<div className="w-[36em]">
						<p className="font-medium">Welcome to GreenShop</p>
						<h1 className="text-[4.3em] font-extrabold tracking-wide leading-none text-blackColor my-1">
							LET'S MAKE A BETTER <span className="text-primary">PLANET</span>
						</h1>
						<p className="text-blackColor">
							We are an online plant shop offering a wide range of cheap and
							trendy plants. Use our plants to create an unique Urban Jungle.
							Order your favorite plants!
						</p>
					</div>
				</> */}
			</Carousel>
		</div>
	);
};

export default Showcase;
