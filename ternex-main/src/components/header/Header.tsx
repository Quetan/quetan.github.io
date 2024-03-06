import type { FC } from "react";
import HeaderNavigation from "./HeaderNavigation";
import HeaderLogo from "./HeaderLogo";

const Header: FC = () => {
	return (
		<header className="fixed p-2 flex flex-row items-center justify-between bg-transparent z-10 left-0 top-0 right-0 backdrop-blur-md">
			<HeaderLogo />
			<HeaderNavigation />
		</header>
	);
};

export default Header;
