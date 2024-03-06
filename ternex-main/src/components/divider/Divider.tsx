import type { FC, PropsWithChildren } from "react";

const Divider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="w-full bg-accent/15 py-16 px-12 text-lg">{children}</div>
	);
};

export default Divider;
