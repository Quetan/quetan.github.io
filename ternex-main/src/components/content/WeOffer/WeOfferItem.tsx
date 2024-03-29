import { useEffect, useRef, type FC } from "react";
import { IOffer } from "./WeOfferGrid";

interface IProps {
	offer: IOffer;
}

const WeOfferItem: FC<IProps> = ({ offer }) => {
	const ref = useRef<HTMLElement>(null);

	useEffect(() => {
		if (!ref.current) return;
		ref.current?.scrollIntoView({
			behavior: "smooth",
			block: "center",
			inline: "start",
		});
	}, [offer]);

	return (
		<article
			ref={ref}
			className="flex flex-col gap-6 justify-center items-center text-center w-3/4 mx-auto"
			style={{
				filter: "drop-shadow(0px 0px 100px hsl(var(--accent)))",
			}}
		>
			<span className="text-lg label px-4 py-2 bg-muted text-muted-foreground font-medium rounded-md">
				{offer.title}
			</span>
			<h1 className="title text-3xl font-semibold">{offer.subtitle}</h1>
			<p className="subtitle text-muted-foreground">{offer.description}</p>
		</article>
	);
};

export default WeOfferItem;
