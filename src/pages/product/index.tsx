import {useParams} from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import axios from "axios";

const Product = () => {
	// let {category, id} = useParams();

	axios({
		url: `/flower/category/"house-plants"}`,
	})
		.then((response) => console.log(response))
		.catch((error) => console.log(error));

	return (
		<div className="w-[90%] mx-auto">
			<Navbar />
			<section>
				<div className="mt-[6em] grid grid-cols-2 gap-12">
					<div className="flex items-center gap-7">
						<div className="flex flex-col justify-start gap-4">
							<div>
								<img
									className="w-[6.25em] h-[6.25em] rounded cursor-pointer"
									src="/src/assets/imgs/plant-0.png"
									alt="plant"
								/>
							</div>
							<div>
								<img
									className="w-[6.25em] h-[6.25em] rounded cursor-pointer"
									src="/src/assets/imgs/plant-0.png"
									alt="plant"
								/>
							</div>
							<div>
								<img
									className="w-[6.25em] h-[6.25em] rounded cursor-pointer"
									src="/src/assets/imgs/plant-0.png"
									alt="plant"
								/>
							</div>
							<div>
								<img
									className="w-[6.25em] h-[6.25em] rounded cursor-pointer"
									src="/src/assets/imgs/plant-0.png"
									alt="plant"
								/>
							</div>
						</div>
						<div className="w-[27.75em] h-[27.75em]">
							<img
								className="w-full h-full"
								src="/src/assets/imgs/plant-0.png"
								alt="plant"
							/>
						</div>
					</div>
					<div></div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Product;
