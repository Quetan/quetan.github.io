import type { FC } from "react";

interface IProps {
	label: string;
	text: string;
	href: string;
}

const FooterLink: FC<IProps> = ({ href, text, label }) => {
	return (
		<div className="flex flex-col gap-2 md:inline md:gap-0">
			<span className="text-xl md:text-3xl lg:text-4xl font-medium">
				{label}:{" "}
			</span>
			<a
				className="px-4 text-xl md:text-3xl lg:text-4xl text-muted-foreground hover:underline"
				href={href}
			>
				{text}
			</a>
		</div>
	);
};

export default FooterLink;
