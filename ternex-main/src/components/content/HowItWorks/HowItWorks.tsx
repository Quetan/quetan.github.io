import type { FC } from "react";
import HowItWorksIllustration from "./HowItWorksIllustration";
import HowItWorksSteps from "./HowItWorksSteps";
import HowItWorksHelper from "./HowItWorksHelper";
import HowItWorksHelpIllustration from "./HowItWorksHelpIllustration";

const HowItWorks: FC = () => {
	return (
		<>
			<div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] pl-4 items-center gap-4 mb-8">
				<HowItWorksSteps />
				<HowItWorksIllustration size={450} />
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] items-center gap-4">
				<HowItWorksHelpIllustration size={300} />
				<HowItWorksHelper />
			</div>
		</>
	);
};

export default HowItWorks;
