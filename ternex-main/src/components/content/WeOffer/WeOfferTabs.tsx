import { useState, type FC } from "react";

import offers from "./offers";
import { IOffer } from "./WeOfferGrid";
import WeOfferItem from "./WeOfferItem";

const WeOfferTabs: FC = () => {
	const [currentOffer, setCurrentOffer] = useState<IOffer>(offers[0]);
	return (
		<div className="flex flex-col gap-12">
			<WeOfferItem offer={currentOffer} />
			<div className="gap-4 items-start grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{offers.map((offer, index) => (
					<button
						key={index}
						onClick={() => setCurrentOffer(offer)}
						disabled={currentOffer.title === offer.title}
						className="hover:shadow-xl hover:shadow-primary/10 h-full py-6 px-4 flex flex-col gap-2 backdrop-blur-lg rounded-md bg-muted/60 transition-colors disabled:bg-accent/60"
					>
						<div className="inline-flex text-sm text-left flex-row gap-2 items-start leading-tight">
							{<offer.icon />}
							<span
								className={`font-medium tracking-tight ${
									currentOffer.title === offer.title
										? "text-accent-foreground"
										: "text-foreground"
								}`}
							>
								{offer.title}
							</span>
						</div>
						<p
							className={`text-left text-xs ${
								currentOffer.title === offer.title
									? "text-accent-foreground"
									: "text-muted-foreground"
							}`}
						>
							{offer.subtitle}
						</p>
					</button>
				))}
			</div>
		</div>
	);
};

export default WeOfferTabs;
