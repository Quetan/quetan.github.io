import type { FC } from "react";
import { IOffer } from "./WeOfferGrid";

interface IProps {
	offer: IOffer;
}

const WeOfferBlock: FC<IProps> = ({ offer }) => {
	return (
		<article className="text-left h-full shadow-inner shadow-primary/10 rounded flex flex-col gap-2 py-8 px-6 border-2 tracking-tight bg-gradient-to-br from-muted/75 to-background/75 backdrop-blur leading-tight hover:shadow-2xl hover:shadow-accent/20 cursor-pointer transition-shadow">
			<h1 className="text-lg tracking-tight leading-tight mb-2 font-medium">
				{offer.title}
			</h1>
			<p className="text-xs leading-tight tracking-tighter text-muted-foreground">
				{offer.subtitle}
			</p>
			<span className="mt-auto text-sm text-right hover:underline">
				Подробнее...
			</span>
		</article>
	);
};

export default WeOfferBlock;
