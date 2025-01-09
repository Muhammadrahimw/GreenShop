import Navbar from "../../components/navbar";
import PlantStore from "../../components/plantStore/intex";
import Showcase from "../../components/showcase";

const Home = () => {
	return (
		<div className="w-[90%] mx-auto">
			<Navbar />
			<Showcase />
			<PlantStore />
		</div>
	);
};

export default Home;
