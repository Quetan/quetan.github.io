import type { FC } from "react";
import offers from "./offers";
import WeOfferBlock from "./WeOfferBlock";

export interface IOffer {
	title: string;
	subtitle: string;
	description: string;
	price: string;
}

const WeOfferGrid: FC = () => {
	return (
		<div className="grid grid-cols-4 gap-4">
			{offers.map((offer, index) => (
				<WeOfferBlock key={index} offer={offer} />
			))}
		</div>
	);
};

export default WeOfferGrid;
