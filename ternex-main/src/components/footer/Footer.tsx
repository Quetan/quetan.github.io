import type { FC } from "react";
import SectionTitle from "../section/SectionTitle";
import FooterLink from "./FooterLink";
import FooterIllustration from "./FooterIllustration";
import { motion } from "framer-motion";
import FooterForm from "./FooterForm";

interface IProps {
	id: string;
}

const Footer: FC<IProps> = ({ id }) => {
	return (
		<footer
			id={id}
			className="relative min-h-dvh pt-32 pb-40 bg-gradient-to-b from-accent/15 via-accent/20 via-60% to-background"
		>
			<div className="container flex flex-col">
				<SectionTitle title="Контакты" />

				<div className=" w-full md:max-w-[420px] lg:max-w-[600px] xl:max-w-[720px]">
					<ul className="grid grid-cols-2 px-4 gap-2">
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

					<FooterForm />
				</div>

				<div className="text-sm text-muted-foreground text-center flex flex-row flex-wrap gap-4 absolute bottom-8 left-1/2 -translate-x-1/2">
					<span>ООО "Тернекс"</span>
					<span>ИНН: 2222877678</span>
					<a className="hover:underline" href="https://ternex.ru/franchise/">
						Франшиза Ternex
					</a>
					<a
						className="hover:underline"
						href="https://ternex.ru/static/landing/html/agreement.html"
					>
						Пользовательское соглашение
					</a>
				</div>
			</div>
			<motion.div
				initial={{ opacity: 0, right: 1000 }}
				whileInView={{
					opacity: 1,
					right: 0,
					transition: { type: "spring", damping: 14, duration: 0.6 },
				}}
				className="absolute -z-10 top-1/2 -translate-y-1/2 right-0 will-change-transform"
			>
				<FooterIllustration className="hidden lg:block" size={750} />
			</motion.div>
		</footer>
	);
};

export default Footer;
