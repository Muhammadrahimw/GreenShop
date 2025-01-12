import About from "../../components/about";
import BlogPosts from "../../components/blogPosts";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import PlantStore from "../../components/plantStore/intex";
import Showcase from "../../components/showcase";

const Home = () => {
	return (
		<div className="w-[90%] mx-auto">
			<Navbar />
			<Showcase />
			<PlantStore />
			<About />
			<BlogPosts />
			<Footer />
		</div>
	);
};

export default Home;
