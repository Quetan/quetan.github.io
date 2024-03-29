import { type FC } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import MapVector from "../Map/MapVector";

const Motion = {
	Title: {
		initial: { opacity: 0, translateY: 25 },
		whileInView: {
			opacity: 1,
			translateY: 0,
			transition: {
				type: "spring",
				duration: 0.6,
				damping: 12,
			},
		},
	},
	Button: {
		initial: { opacity: 0, translateY: 25 },
		whileInView: {
			opacity: 1,
			translateY: 0,
			transition: {
				type: "spring",
				duration: 0.6,
				damping: 12,
				delay: 0.2,
			},
		},
	},
} as const;

const MainSection: FC = () => {
	return (
		<section className="flex-col gap-8 min-h-screen flex items-center justify-center relative">
			<MapVector />
			<motion.div
				{...Motion.Title}
				className="text-white stroke-muted flex flex-col items-center gap-8 container z-10"
				style={{
					WebkitTextStroke: "1px hsl(var(--muted-foreground))",
				}}
			>
				<span
					className="text-[7rem] font-bold leading-none tracking-tight"
					style={{
						textShadow: "4px 4px var(--color-dark-25)",
					}}
				>
					Ternex
				</span>
				<div className="flex flex-col gap-8 justify-center text-center items-center">
					<h1
						className="text-center text-[3.5rem] font-semibold tracking-tighter leading-none"
						style={{
							textShadow: "2px 2px var(--color-dark-25)",
						}}
					>
						<span className="sr-only">Ternex -</span>Создавай сеть где угодно!
					</h1>
					<span className="text-center text-balance w-10/12 text-3xl font-medium tracking-tighter leading-snug">
						Беспроводные сети нового поколения для вашего бизнеса или дома
					</span>
				</div>
			</motion.div>
			<motion.div {...Motion.Button} className="z-10">
				<Button size="lg" variant="default" asChild>
					<a href="#about-technology">Узнать больше</a>
				</Button>
			</motion.div>
		</section>
	);
};

export default MainSection;
