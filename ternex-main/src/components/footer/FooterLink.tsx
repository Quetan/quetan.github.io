import type { FC } from "react";

interface IProps {
	label: string;
	text: string;
	href: string;
}

const FooterLink: FC<IProps> = ({ href, text, label }) => {
	return (
		<>
			<span className="text-4xl font-medium">{label}: </span>
			<a
				className="rounded-full bg-accent/50 px-4 text-4xl text-accent-foreground hover:underline"
				href={href}
			>
				{text}
			</a>
		</>
	);
};

export default FooterLink;
