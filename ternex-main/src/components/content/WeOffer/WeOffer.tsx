import type { FC } from "react";
import WeOfferIllustration from "./WeOfferIllustration";
import WeOfferGrid from "./WeOfferGrid";

const WeOffer: FC = () => {
	return (
		<div className="relative">
			<WeOfferGrid />
			<div className="absolute -z-10 -bottom-16 right-4 opacity-50">
				<WeOfferIllustration size={window.innerWidth < 768 ? 0 : 290} />
			</div>
		</div>
	);
};

export default WeOffer;
