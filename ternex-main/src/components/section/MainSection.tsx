import type { FC } from "react";
import { Button } from "../ui/button";

const MainSection: FC = () => {
	return (
		<section className="flex-col gap-8 min-h-screen bg-no-repeat bg-center bg-cover bg-main-section flex items-center justify-center">
			<div className="text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary to-accent via-60% flex flex-col items-center gap-8 ">
				<span
					className="text-[7rem] font-bold leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-primary to-accent from-60%"
					style={{
						textShadow: "4px 4px var(--color-dark-25)",
					}}
				>
					Ternex
				</span>
				<h1 className="text-center text-[3.5rem] font-semibold tracking-tighter leading-none">
					Создавай сеть где угодно!
				</h1>
				<span className="text-center text-balance w-10/12 text-3xl font-medium tracking-tighter leading-snug">
					Беспроводные сети нового поколения для вашего бизнеса или дома с
					компанией Ternex
				</span>
			</div>
			<Button size="lg" variant="default">
				Узнать больше
			</Button>
		</section>
	);
};

export default MainSection;
