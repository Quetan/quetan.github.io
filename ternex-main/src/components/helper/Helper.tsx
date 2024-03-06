import type { FC, PropsWithChildren } from "react";

interface IHelper extends PropsWithChildren {
	title: string;
}

const Helper: FC<IHelper> = ({ children, title }) => {
	return (
		<div className="mb-8 mt-6 py-6 pb-10 px-8 bg-primary-foreground/40 border-2 rounded-md">
			<h3 className="text-2xl mb-4 font-medium leading-snug">{title}</h3>
			{children}
		</div>
	);
};

export default Helper;
