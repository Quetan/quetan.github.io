import type { FC } from "react";
import AboutTechnoogyIllustration from "./AboutTechnoogyIllustration";
import AboutAdvantagesIllustration from "./AboutAdvantagesIllustration";
import AboutTechnologyHelper from "./AboutTechnologyHelper";

const AboutTechnology: FC = () => {
	return (
		<>
			<div className="flex flex-col-reverse lg:grid lg:grid-cols-[450px_1fr] items-center gap-8">
				<AboutTechnoogyIllustration size={450} />
				<div>
					<h2 className="text-3xl mt-4 mb-6 font-medium">
						Mesh-сети -{" "}
						<span className="text-muted-foreground text-2xl mt-4 mb-6 font-medium">
							Зачем такие сети нужны?
						</span>
					</h2>

					<p className="mb-2">
						Команда Тернекс разрабатывает одноименную отечественную операционную
						систему для беспроводного телекоммуникационного оборудования (wi-fi
						роутеров и точек доступа). В её основе простые решения для создания
						беспроводных сетей по технологии одноранговых (mesh)
						самоорганизующихся и устойчивых к разрушениям сетей.
					</p>
					<p className="mb-2">
						Мы предлагаем инструменты для постройки новой инфраструктуры
						интернета и компьютерных сетей, исключая специалистов и
						специализированное сетевое оборудование. Отныне каждый может создать
						компьютерную сеть корпоративного уровня без специальных знаний и
						оборудования.
					</p>
				</div>
			</div>

			<AboutTechnologyHelper />

			<div className="flex flex-col-reverse lg:grid lg:grid-cols-[1fr_450px] items-center gap-8">
				<div>
					<h2 className="text-3xl mt-4 mb-6 font-medium">
						Преимущества технологии -{" "}
						<span className="text-muted-foreground text-2xl mt-4 mb-6 font-medium">
							Почему это удобно?
						</span>
					</h2>
					<ul className="flex flex-col gap-2 list-disc pl-6">
						<li>
							<b>Легкость монтажа</b> —{" "}
							<span className="text-muted-foreground">
								отсутствует кабельный монтаж, не нужно сверлить стены. Просто
								подключите оборудование к сети 220В через адаптер питания, оно
								само выполнит настройку и обнаружит другие устройства;
							</span>
						</li>
						<li>
							<b>Низкая стоимость</b> —{" "}
							<span className="text-muted-foreground">
								для создания и эксплуатации сети не требуется использование
								коммутаторов, wi-fi контролеров и выделенных специалистов. На
								площадках, где уже прошло внедрение, экономическая эффективность
								составила от 4 до 8 раз по сравнению с конкурентами;
							</span>
						</li>
						<li>
							<b>Управление на основе ИИ и предупреждение сетевых инцидентов</b>{" "}
							—{" "}
							<span className="text-muted-foreground">
								специализированный портал управления отслеживает состояние всех
								роутеров, точек доступа, а также клиентских беспроводных
								устройств и сам пытается устранять сетевые проблемы;
							</span>
						</li>
						<li>
							<b>
								Множество корпоративных функций управления в простом интерфейсе
							</b>{" "}
							—{" "}
							<span className="text-muted-foreground">
								контроль местонахождения и перемещения сотрудников в зоне
								беспроводной сети, реагирование на события, беспроводное
								видеонаблюдение, встроеный файервол и Captive Portal и т.д.
							</span>
						</li>
					</ul>
				</div>
				<AboutAdvantagesIllustration size={innerWidth < 768 ? 200 : 450} />
			</div>
		</>
	);
};

export default AboutTechnology;
