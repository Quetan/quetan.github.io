import type { FC } from "react";

interface IProps {
	label: string;
	text: string;
	href: string;
}

const FooterLink: FC<IProps> = ({ href, text, label }) => {
	return (
		<div className="flex flex-col gap-1 md:inline md:gap-0">
			<span className="font-medium text-xs">{label}: </span>
			<a
				className="px-2 text-xs text-muted-foreground hover:underline"
				href={href}
			>
				{text}
			</a>
		</div>
	);
};

export default FooterLink;
