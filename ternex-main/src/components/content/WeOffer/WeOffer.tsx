import type { FC } from "react";
// import WeOfferGrid from "./WeOfferGrid";
import WeOfferIllustration from "./WeOfferIllustration";
import WeOfferTabs from "./WeOfferTabs";

const WeOffer: FC = () => {
	return (
		<div className="relative">
			<WeOfferTabs />
			<div className="absolute -z-10 -bottom-12 -right-24 opacity-75">
				<WeOfferIllustration size={window.innerWidth < 768 ? 0 : 500} />
			</div>
		</div>
	);
};

export default WeOffer;