import type { FC, PropsWithChildren } from "react";

const Divider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="w-full bg-accent/15 py-12 px-8 lg:py-16 lg:px-12 text-lg">
			<div className="container">{children}</div>
		</div>
	);
};

export default Divider;
