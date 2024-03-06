import type { FC } from "react";

interface IProps {
	title: string;
}

const SectionTitle: FC<IProps> = ({ title }) => {
	return (
		<h1 className="bg-gradient-to-br text-transparent bg-clip-text text-5xl font-bold leading-none mb-12 to-accent from-accent-foreground from-10%">
			{title}
		</h1>
	);
};

export default SectionTitle;
