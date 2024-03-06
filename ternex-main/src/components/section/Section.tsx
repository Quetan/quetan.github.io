import type { FC, HTMLAttributes, PropsWithChildren } from "react";

interface ISection extends PropsWithChildren {
	title: string;
	props?: HTMLAttributes<HTMLDivElement>;
}

const Section: FC<ISection> = ({ children, title, props }) => {
	return (
		<section className="min-h-dvh container pt-32 pb-16" {...props}>
			<h1 className="bg-gradient-to-br text-transparent bg-clip-text text-5xl font-bold leading-none mb-12 to-accent from-accent-foreground from-10%">
				{title}
			</h1>
			{children}
		</section>
	);
};

export default Section;
