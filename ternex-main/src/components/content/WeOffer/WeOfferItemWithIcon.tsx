import type { FC } from "react";
import { IOffer } from "./WeOfferGrid";

interface IProps {
	offer: IOffer;
}

const WeOfferItemWithIcon: FC<IProps> = ({ offer }) => {
	return (
		<article className="hover:shadow-xl hover:shadow-primary/10 h-full py-6 px-4 flex flex-col gap-2 backdrop-blur-lg rounded-md bg-muted/60 transition-colors disabled:bg-accent/60">
			<div className="inline-flex text-sm text-left flex-row gap-2 items-start leading-tight">
				{<offer.icon />}
				<span className="font-medium tracking-tight text-foreground">
					{offer.title}
				</span>
			</div>
			<p className="text-left text-xs text-muted-foreground">
				{offer.subtitle}
			</p>
			<span className="ml-auto mt-auto text-sm text-right hover:underline">
				Подробнее...
			</span>
		</article>
	);
};

export default WeOfferItemWithIcon;
