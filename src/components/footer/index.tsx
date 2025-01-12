import {
	EnvironmentOutlined,
	MailOutlined,
	PhoneOutlined,
} from "@ant-design/icons";
import {Link} from "react-router-dom";

const Footer = () => {
	return (
		<footer className="mt-[6em] bg-[#FBFBFB] rounded">
			<div className="flex items-center justify-between p-6">
				<div className="w-[14.5em] border-r border-gray-200">
					<img src="/src/assets/icons/plant-icon-1.svg" alt="plant icon" />
					<p className="mt-2 font-bold">Garden Care</p>
					<p className="text-[#727272] text-sm mt-2">
						We are an online plant shop offering a wide range of cheap and
						trendy plants.
					</p>
				</div>
				<div className="w-[14.5em] border-r border-gray-200">
					<img src="/src/assets/icons/plant-icon-2.svg" alt="plant icon" />
					<p className="mt-2 font-bold">Garden Care</p>
					<p className="text-[#727272] text-sm mt-2">
						We are an online plant shop offering a wide range of cheap and
						trendy plants.
					</p>
				</div>
				<div className="w-[14.5em]">
					<img src="/src/assets/icons/plant-icon-3.svg" alt="plant icon" />
					<p className="mt-2 font-bold">Garden Care</p>
					<p className="text-[#727272] text-sm mt-2">
						We are an online plant shop offering a wide range of cheap and
						trendy plants.
					</p>
				</div>
				<div className="w-[27em]">
					<p className="text-[1.1em] font-bold">
						Would you like to join newsletters?
					</p>
					<div className="flex items-center justify-between mt-4 h-11">
						<input
							className="w-full h-full pl-3 text-base text-gray-700 rounded-l-lg outline-none"
							placeholder="enter your email address..."
							type="email"
						/>
						<button
							className="w-[7em] h-full rounded-r-lg bg-primary text-white"
							type="button">
							Join
						</button>
					</div>
					<p className="mt-4 text-sm text-[#727272]">
						We usually post offers and challenges in newsletter. We’re your
						online houseplant destination. We offer a wide range of houseplants
						and accessories shipped directly from our (green)house to yours!
					</p>
				</div>
			</div>
			<div className="h-[5.5em] w-full px-6 border-y border-gray-300 bg-[#46A3581A] flex items-center gap-[5em]">
				<Link to={`/`}>
					<img src="/src/assets/icons/logo.svg" alt="logo Greenshop" />
				</Link>
				<div className="flex items-center gap-2">
					<EnvironmentOutlined className="text-primary" />
					<p className="text-sm text-[#3D3D3D]">
						70 West Buckingham Ave. <br />
						Farmingdale, NY 11735
					</p>
				</div>
				<div className="flex items-center gap-2">
					<MailOutlined className="text-primary" />
					<p className="text-sm text-[#3D3D3D]">contact@greenshop.com</p>
				</div>
				<div className="flex items-center gap-2">
					<PhoneOutlined className="text-primary" />
					<p className="text-sm text-[#3D3D3D]">+88 01911 717 490</p>
				</div>
			</div>
			<div className="flex items-start gap-[10em] py-8 px-6 border-b border-primary">
				<div>
					<p className="font-bold mb-3 text-[1.1em]">My Account</p>
					<p className="mt-3 cursor-pointer text-[#3D3D3D] text-sm">
						My Account
					</p>
					<p className="mt-3 cursor-pointer text-[#3D3D3D] text-sm">
						Our stores
					</p>
					<p className="mt-3 cursor-pointer text-[#3D3D3D] text-sm">
						Contact us
					</p>
					<p className="mt-3 cursor-pointer text-[#3D3D3D] text-sm">Career</p>
					<p className="mt-3 cursor-pointer text-[#3D3D3D] text-sm">Specials</p>
				</div>
				<div>
					<p className="font-bold mb-3 text-[1.1em]">Help & Guide</p>
					<p className="mt-3 cursor-pointer text-[#3D3D3D] text-sm">
						Help Center
					</p>
					<p className="mt-3 cursor-pointer text-[#3D3D3D] text-sm">
						How to Buy
					</p>
					<p className="mt-3 cursor-pointer text-[#3D3D3D] text-sm">
						Shipping & Delivery
					</p>
					<p className="mt-3 cursor-pointer text-[#3D3D3D] text-sm">
						Product Policy
					</p>
					<p className="mt-3 cursor-pointer text-[#3D3D3D] text-sm">
						How to Return
					</p>
				</div>
				<div>
					<p className="font-bold mb-3 text-[1.1em]">Categories</p>
					<p className="mt-3 cursor-pointer text-[#3D3D3D] text-sm">
						House Plants
					</p>
					<p className="mt-3 cursor-pointer text-[#3D3D3D] text-sm">
						Potter Plants
					</p>
					<p className="mt-3 cursor-pointer text-[#3D3D3D] text-sm">Seeds</p>
					<p className="mt-3 cursor-pointer text-[#3D3D3D] text-sm">
						Small Plants
					</p>
					<p className="mt-3 cursor-pointer text-[#3D3D3D] text-sm">
						Accessories
					</p>
				</div>
				<div>
					<p className="font-bold mb-3 text-[1.1em]">Categories</p>
					<div className="flex items-center gap-2 mt-5">
						<div className="flex items-center justify-center border rounded border-opacity-60 border-primary w-7 h-7">
							<img src="/src/assets/icons/Facebook.svg" alt="Facebook icon" />
						</div>
						<div className="flex items-center justify-center border rounded border-opacity-60 border-primary w-7 h-7">
							<img src="/src/assets/icons/Instagram.svg" alt="Instagram icon" />
						</div>
						<div className="flex items-center justify-center border rounded border-opacity-60 border-primary w-7 h-7">
							<img src="/src/assets/icons/Twitter.svg" alt="Twitter icon" />
						</div>
						<div className="flex items-center justify-center border rounded border-opacity-60 border-primary w-7 h-7">
							<img src="/src/assets/icons/Linkedin.svg" alt="Linkedin icon" />
						</div>
						<div className="flex items-center justify-center border rounded border-opacity-60 border-primary w-7 h-7">
							<img src="/src/assets/icons/Union.svg" alt="Union icon" />
						</div>
					</div>
					<div className="mt-8">
						<p className="text-[1.15em] font-bold">We accept</p>
					</div>
					<div className="mt-3">
						<img
							className="w-full"
							src="/src/assets/icons/payments.svg"
							alt="payments"
						/>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
