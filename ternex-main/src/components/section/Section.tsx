import { cn } from "@/lib/utils";
import type { FC, HTMLAttributes, PropsWithChildren } from "react";
import SectionTitle from "./SectionTitle";

interface ISection extends PropsWithChildren {
	title: string;
	props?: HTMLAttributes<HTMLDivElement>;
}

const Section: FC<ISection> = ({ children, title, props }) => {
	return (
		<section
			{...props}
			className={cn("min-h-dvh container pt-32 pb-16", props?.className)}
		>
			<SectionTitle title={title} />
			{children}
		</section>
	);
};

export default Section;
