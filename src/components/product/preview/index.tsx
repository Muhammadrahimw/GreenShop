import {FC, useState} from "react";
import {DataType} from "../../../@types";
import {Skeleton} from "antd";

const Preview: FC<DataType> = ({data, isLoading, isError}) => {
	let [plantDefaultImage, setPlantDefaultImage] = useState<string>("");
	return (
		<div className="flex items-center gap-7">
			<div className="flex flex-col justify-start gap-4">
				{isLoading || isError
					? Array.from({length: 4}).map((_, id) => (
							<div key={id}>
								<Skeleton.Image active />
							</div>
					  ))
					: data?.detailed_images.slice(0, 4).map((value, id) => (
							<div
								key={id}
								onClick={() =>
									setPlantDefaultImage(data?.detailed_images[id] as string)
								}>
								<img
									className="w-[6.25em] h-[6.25em] rounded cursor-pointer"
									src={value}
									alt="plant"
								/>
							</div>
					  ))}
			</div>
			<div className="w-[27.75em] h-[27.75em]">
				{isLoading || isError ? (
					<Skeleton.Image active className="!w-full !h-full" />
				) : (
					<img
						className="object-contain w-full h-full"
						src={plantDefaultImage || data?.detailed_images[0]}
						alt="plant"
					/>
				)}
			</div>
		</div>
	);
};

export default Preview;
