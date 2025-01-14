import {FC, useState} from "react";
import {DataType} from "../../../@types";

const Description: FC<DataType> = ({data, isLoading, isError}) => {
	let [activeSection, setActiveSection] = useState<boolean>(true);
	return (
		<div className="mt-[6em]">
			<div className="flex items-center gap-7">
				<p
					onClick={() => setActiveSection(true)}
					className={`text-[#3D3D3D] text-[1.15em] cursor-pointer`}>
					Product Description
				</p>
				<p
					onClick={() => setActiveSection(false)}
					className={`text-[#3D3D3D] text-[1.15em] cursor-pointer`}>
					Reviews {data?.views}
				</p>
			</div>
			<div className="mt-4 text-[#727272] text-sm">
				{activeSection ? (
					<div
						dangerouslySetInnerHTML={{
							__html: data?.description as string,
						}}></div>
				) : (
					<div
						dangerouslySetInnerHTML={{
							__html:
								data?.comments?.map((value) => `<p>${value}</p>`).join("") ||
								`<p>no comment yet</p>`,
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default Description;
