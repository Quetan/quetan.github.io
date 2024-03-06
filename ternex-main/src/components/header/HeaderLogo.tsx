import type { FC } from "react";
import Logo from "../ui/logo";

const HeaderLogo: FC = () => {
	return (
		<a href="/" className="flex flex-row items-center">
			<Logo className="fill-primary dark:fill-white" />
			<span className="text-5xl font-medium tracking-tighter leading-none dark:text-white -translate-x-2">
				Ternex
			</span>
		</a>
	);
};

export default HeaderLogo;
