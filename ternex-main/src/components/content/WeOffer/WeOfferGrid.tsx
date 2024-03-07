import type { FC } from "react";
import offers from "./offers";
import WeOfferBlock from "./WeOfferBlock";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import WeOfferModal from "./WeOfferModal";

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
				<Dialog key={index}>
					<DialogTrigger>
						<WeOfferBlock offer={offer} />
					</DialogTrigger>
					<WeOfferModal offer={offer} />
				</Dialog>
			))}
		</div>
	);
};

export default WeOfferGrid;
