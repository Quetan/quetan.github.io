import type { FC } from "react";
import Header from "../header/Header";
import Section from "../section/Section";
import MainSection from "../section/MainSection";
import AboutTechnology from "../content/AboutTechnology/AboutTechnology";
import Divider from "../divider/Divider";
import HowItWorks from "../content/HowItWorks/HowItWorks";
import WeOffer from "../content/WeOffer/WeOffer";
import fond from "../../assets/fond.webp";
import HowToStart from "../content/HowToStart/HowToStart";
import Footer from "../footer/Footer";

const Layout: FC = () => {
	return (
		<>
			<Header />
			<main>
				<MainSection />
				<Section
					title="О технологии"
					props={{
						id: "about-technology",
					}}
				>
					<AboutTechnology />
				</Section>
				<Divider>
					<p>
						Компания ООО «Тернекс» - разработчик одноименной операционной
						системы для беспроводного телекоммуникационного оборудования.
						Внесена в реестр отечественного ПО. Запись в реестре №9963 от
						02.04.2021.
					</p>
				</Divider>
				<Section
					title="Установка"
					props={{
						id: "how-it-works",
					}}
				>
					<HowItWorks />
				</Section>
				<Section
					title="Что мы предлагаем?"
					props={{
						id: "what-we-offer",
					}}
				>
					<WeOffer />
				</Section>
				<Divider>
					<div className="flex flex-row items-center gap-4">
						<img
							width="400"
							height="268"
							className="h-32 w-auto drop-shadow-md"
							src={fond}
							alt="Фонд содействия инновациям"
						/>
						<p>
							Компания ООО «Тернекс» — победитель конкурса «Старт SUV-2019»
							организованного Сколково и Фондом содействия инновациям,
							исполнитель гранта Фонда содействия инновациям.
						</p>
					</div>
				</Divider>
				<Section
					title="Как преобрести?"
					props={{
						id: "how-to-start",
					}}
				>
					<HowToStart />
				</Section>
			</main>
			<Footer id="contacts" />
		</>
	);
};

export default Layout;
