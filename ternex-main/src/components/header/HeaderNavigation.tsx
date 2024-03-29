import { LogInIcon } from "lucide-react";
import type { FC } from "react";
import Socials from "../socials/Socials";

const HeaderNavigation: FC = () => {
	return (
		<nav className="flex flex-row items-center">
			<Socials />
			<ul className="hidden lg:flex flex-row items-center px-8">
				<li className="text-sm leading-none tracking-tighter underline-offset-2 hover:underline">
					<a className="p-3" href="#about-technology">
						О технологии
					</a>
				</li>
				<li className="text-sm leading-none tracking-tighter underline-offset-2 hover:underline">
					<a className="p-3" href="#how-it-works">
						Установка
					</a>
				</li>
				<li className="text-sm leading-none tracking-tighter underline-offset-2 hover:underline">
					<a className="p-3" href="#what-we-offer">
						Предложения
					</a>
				</li>
				<li className="text-sm leading-none tracking-tighter underline-offset-2 hover:underline">
					<a className="p-3" href="#how-to-start">
						Приобрести
					</a>
				</li>
				<li className="text-sm leading-none tracking-tighter underline-offset-2 hover:underline">
					<a className="p-3" href="#contacts">
						Контакты
					</a>
				</li>
				<li>
					<a
						className="text-sm leading-none bg-primary text-primary-foreground px-6 rounded-2xl tracking-tighter underline-offset-2 py-2 ml-8 hover:shadow-xl transition-shadow hover:shadow-accent/70 flex flex-row gap-2 items-center"
						href="https://ternex.ru/portal"
						target="_blank"
					>
						<LogInIcon size={16} />
						Войти
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default HeaderNavigation;
