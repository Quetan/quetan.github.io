import {
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { FC } from "react";
import { IOffer } from "./WeOfferGrid";

interface IProps {
	offer: IOffer;
}

const weOfferModal: FC<IProps> = ({ offer }) => {
	return (
		<DialogContent className="max-w-[425px] md:max-w-[480px] lg:max-w-[720px] xl:max-w-[960px]">
			<DialogHeader>
				<DialogTitle className="text-3xl">{offer.title}</DialogTitle>
				<DialogDescription className="text-xl">
					{offer.subtitle}
				</DialogDescription>
			</DialogHeader>
			<div className="grid gap-4 py-4">
				<p className="leading-relaxed">{offer.description}</p>
			</div>
			{offer.price && (
				<DialogFooter className="justify-start space-x-0 sm:justify-start sm:space-x-0 inline">
					<span className="font-semibold">Стоимость:</span>{" "}
					<span className="text-muted-foreground">{offer.price}</span>
				</DialogFooter>
			)}
		</DialogContent>
	);
};

export default weOfferModal;
