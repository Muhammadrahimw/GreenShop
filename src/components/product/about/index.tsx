import {FC} from "react";
import {DataType} from "../../../@types";
import {Rate, Skeleton} from "antd";
import {
	FacebookFilled,
	HeartOutlined,
	LinkedinFilled,
	MailOutlined,
	TwitterOutlined,
} from "@ant-design/icons";

const About: FC<DataType> = ({data, isLoading, isError}) => {
	let activeSizeStyle = `border-primary text-primary`;

	return (
		<>
			{isLoading || isError ? (
				<div>
					<Skeleton.Input active />
					<Skeleton.Input active className="!w-full mt-3" />
					<Skeleton.Input active className="!w-full mt-3 !h-[4.5em]" />
					<Skeleton.Input active className="!w-[12em] mt-5 !h-[3.85em]" />
					<div>
						<Skeleton.Input active className="!w-[32em] mt-5 !h-[3.5em]" />
					</div>
					<Skeleton.Input active className="!w-[18em] mt-5 !h-[8em]" />
				</div>
			) : (
				<div>
					<div>
						<h2 className="text-4xl font-bold">{data?.title}</h2>
						<div className="flex items-center justify-between gap-4 pb-2 mt-3 border-b">
							<p className="text-xl font-bold text-primary">${data?.price}</p>
							<div className="flex items-center gap-3">
								<Rate defaultValue={data?.rate} disabled />
								<p className="text-blackColor">19 Customer Review</p>
							</div>
						</div>
						<p className="mt-3 font-medium">Short Description:</p>
						<p className="mt-1 text-[#727272]">{data?.short_description}</p>
						<p className="mt-4 font-medium">Size:</p>
						<div className="flex items-center gap-3 mt-2">
							<div
								className={`flex items-center justify-center text-black border rounded-full w-8 h-8 cursor-pointer ${activeSizeStyle}`}>
								S
							</div>
							<div
								className={`flex items-center justify-center text-black border rounded-full w-8 h-8 cursor-pointer`}>
								M
							</div>
							<div
								className={`flex items-center justify-center text-black border rounded-full w-8 h-8 cursor-pointer`}>
								L
							</div>
							<div
								className={`flex items-center justify-center text-black border rounded-full w-8 h-8 cursor-pointer`}>
								XL
							</div>
						</div>
						<div className="flex items-center gap-5 mt-5">
							<div className="flex items-center gap-5">
								<div className="flex items-center justify-center w-8 h-8 text-white rounded-full cursor-pointer bg-primary">
									<p className="text-xl">-</p>
								</div>
								<p>1</p>
								<div className="flex items-center justify-center w-8 h-8 text-white rounded-full cursor-pointer bg-primary">
									<p className="text-xl">+</p>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<button
									type="button"
									className="w-[8.1em] h-10 rounded bg-primary flex items-center justify-center text-white">
									<p className="text-sm font-medium">Buy NOW</p>
								</button>
								<button
									type="button"
									className="w-[8.1em] h-10 rounded bg-transparent border border-primary flex items-center justify-center text-primary">
									<p className="text-sm font-medium">Add to cart</p>
								</button>
								<div className="flex items-center justify-center w-10 h-10 border rounded cursor-pointer border-primary">
									<HeartOutlined className="text-xl text-primary" />
								</div>
							</div>
						</div>
					</div>
					<div className="mt-5 text-[0.95em]">
						<p className="text-[#a7a7a7]">
							SKU: <span className="text-[#747474]">1995751877966</span>
						</p>
						<p className="text-[#a7a7a7] mt-1">
							Categories:{" "}
							<span className="text-[#747474]">{data?.category}</span>
						</p>
						<p className="text-[#a7a7a7] mt-1">
							Tags:
							<span className="text-[#747474]">
								{data?.tags[0]
									? data.tags.map((value) => <p>{value}</p>)
									: " Home, Garden, Plants"}
							</span>
						</p>
						<div className="text-[#a7a7a7] mt-1 flex items-center gap-2">
							Share this products:
							<div className="flex items-center gap-2 text-blackColor">
								<FacebookFilled />
								<TwitterOutlined />
								<LinkedinFilled />
								<MailOutlined />
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default About;
