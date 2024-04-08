import type { FC } from "react";
import offers from "./offers";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import WeOfferModal from "./WeOfferModal";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import WeOfferItemWithIcon from "./WeOfferItemWithIcon";

export interface IOffer {
	title: string;
	subtitle: string;
	description: string;
	price: string;
	icon: LucideIcon;
	website?: string;
}

const WeOfferGrid: FC = () => {
	return (
		<div className="items-center flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
			{offers.map((offer, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, scale: 1.2 }}
					whileInView={{
						opacity: 1,
						scale: 1,
						transition: {
							type: "spring",
							damping: 9,
							duration: 0.75,
							delay: index * 0.05,
						},
					}}
					className="will-change-transform w-full h-full flex"
				>
					<Dialog>
						<DialogTrigger className="w-full">
							<WeOfferItemWithIcon offer={offer} />
						</DialogTrigger>
						<WeOfferModal offer={offer} />
					</Dialog>
				</motion.div>
			))}
		</div>
	);
};

export default WeOfferGrid;
