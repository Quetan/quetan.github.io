import type { FC } from "react";

interface IProps {
	label: string;
	text: string;
	href: string;
}

const FooterLink: FC<IProps> = ({ href, text, label }) => {
	return (
		<>
			<span className="text-4xl font-medium">{label}:</span>
			{href ? (
				<a
					className="text-4xl text-muted-foreground hover:underline"
					href={href}
				>
					{" "}
					{text}
				</a>
			) : (
				<span className="text-4xl text-muted-foreground"> {text}</span>
			)}
		</>
	);
};

export default FooterLink;
