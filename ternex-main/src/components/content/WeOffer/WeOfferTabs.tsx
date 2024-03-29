import { useState, type FC } from "react";

import offers from "./offers";
import { IOffer } from "./WeOfferGrid";

const WeOfferTabs: FC = () => {
	const [currentOffer, setCurrentOffer] = useState<IOffer>(offers[0]);
	return (
		<div className="flex flex-col gap-12">
			<article className="h-[50vh] flex flex-col gap-6 justify-center items-center text-center w-3/4 mx-auto">
				<span className="text-lg label px-4 py-2 bg-muted text-muted-foreground font-medium rounded-md">
					{currentOffer.title}
				</span>
				<h1 className="title text-3xl font-semibold">
					{currentOffer.subtitle}
				</h1>
				<p className="subtitle text-muted-foreground">
					{currentOffer.description}
				</p>
			</article>
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
