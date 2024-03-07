import type { FC } from "react";
import SectionTitle from "../section/SectionTitle";
import FooterLink from "./FooterLink";
import FooterIllustration from "./FooterIllustration";

const Footer: FC = () => {
	return (
		<footer className="relative min-h-dvh pt-32 pb-16 bg-gradient-to-b from-accent/15 via-accent/20 via-60% to-background">
			<div className="container">
				<SectionTitle title="Контакты" />
				<ul className="flex flex-col gap-8">
					<li>
						<FooterLink
							label="Email"
							text="info@ternex.ru"
							href="mailto:support@ternex.ru"
						/>
					</li>
					<li>
						<FooterLink
							label="Телефон для связи"
							text="+7 (906) 196 52-00"
							href="tel:+79061965200"
						/>
					</li>
					<li>
						<FooterLink
							label="Telegram"
							text="tg/@ternex_mesh"
							href="https://t.me/ternex_setup"
						/>
					</li>
					<li>
						<FooterLink
							label="YouTube"
							text="youtube/@ternex_mesh"
							href="https://www.youtube.com/@ternex_mesh"
						/>
					</li>
				</ul>
				<div className="text-sm text-muted-foreground flex flex-row flex-wrap gap-4 absolute bottom-8 left-1/2 -translate-x-1/2">
					<span>ООО "Тернекс"</span>
					<span>ИНН: 2222877678</span>
					<a
						className="hover:underline"
						href="https://ternex.ru/static/landing/html/agreement.html"
					>
						Пользовательское соглашение
					</a>
				</div>
			</div>
			<div className="absolute -z-10 top-1/2 -translate-y-1/2 right-0">
				<FooterIllustration size={750} />
			</div>
		</footer>
	);
};

export default Footer;
