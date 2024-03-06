import type { FC, HTMLAttributes } from "react";
import YouTube from "./YouTube";
import Vk from "./VK";
import Telegram from "./Telegram";

const Socials: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
	return (
		<div className="flex flex-row items-center" {...props}>
			<a
				className="px-2 py-1"
				target="_blank"
				href="https://youtube.com/@ternex_mesh"
			>
				<YouTube size={28} className="fill-primary" />
			</a>
			<a className="px-2 py-1" target="_blank" href="https://t.me/ternex_setup">
				<Telegram size={22} className="fill-primary" />
			</a>
			<a
				className="px-2 py-1"
				target="_blank"
				href="https://vk.com/ternex_mesh"
			>
				<Vk size={22} className="fill-primary" />
			</a>
		</div>
	);
};

export default Socials;
