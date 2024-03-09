import { type FC } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

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
		<section className="flex-col gap-8 min-h-screen bg-no-repeat bg-center bg-cover bg-main-section flex items-center justify-center">
			<motion.div
				{...Motion.Title}
				className="text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary to-accent via-60% flex flex-col items-center gap-8 container"
			>
				<span
					className="text-[7rem] font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-primary to-accent from-60%"
					style={{
						textShadow: "4px 4px var(--color-dark-25)",
					}}
				>
					Ternex
				</span>
				<div className="flex flex-col gap-8 justify-center text-center items-center">
					<h1 className="text-center text-[3.5rem] font-semibold tracking-tighter leading-none">
						<span className="sr-only">Ternex -</span>Создавай сеть где угодно!
					</h1>
					<span className="text-center text-balance w-10/12 text-3xl font-medium tracking-tighter leading-snug">
						Беспроводные сети нового поколения для вашего бизнеса или дома
					</span>
				</div>
			</motion.div>
			<motion.div {...Motion.Button}>
				<Button size="lg" variant="default" asChild>
					<a href="#about-technology">Узнать больше</a>
				</Button>
			</motion.div>
		</section>
	);
};

export default MainSection;
