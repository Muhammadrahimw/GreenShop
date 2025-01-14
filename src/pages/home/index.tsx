import About from "../../components/about";
import BlogPosts from "../../components/blogPosts";
import PlantStore from "../../components/plantStore/intex";
import Showcase from "../../components/showcase";

const Home = () => {
	return (
		<div className="w-[90%] mx-auto">
			<Showcase />
			<PlantStore />
			<About />
			<BlogPosts />
		</div>
	);
};

export default Home;
