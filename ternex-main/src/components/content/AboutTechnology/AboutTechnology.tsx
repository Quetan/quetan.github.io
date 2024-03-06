import type { FC } from "react";
import AboutTechnoogyIllustration from "./AboutTechnoogyIllustration";
import AboutAdvantagesIllustration from "./AboutAdvantagesIllustration";
import AboutTechnologyHelper from "./AboutTechnologyHelper";

const AboutTechnology: FC = () => {
	return (
		<>
			<div className="grid grid-cols-[450px_1fr] items-center gap-8">
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

			<div className="grid grid-cols-[1fr_450px] items-center gap-8">
				<div>
					<h2 className="text-3xl mt-4 mb-6 font-medium">
						Преимущества технологии -{" "}
						<span className="text-muted-foreground text-2xl mt-4 mb-6 font-medium">
							Почему это удобно?
						</span>
					</h2>
					<ul className="flex flex-col gap-2 list-disc pl-6">
						<li>
							Легкость монтажа – отсутствует кабельный монтаж, не нужно сверлить
							стены. Просто подключите оборудование к сети 220В оно само
							выполнит настройку и обнаружит другие устройства
						</li>
						<li>
							Низкая стоимость – для создания и эксплуатации сети не требуется
							использование коммутаторов, wi-fi контролеров и выделенных
							специалистов. На площадках где уже прошло внедрение экономическая
							эффективность составила от 4 до 8 раз по сравнению с конкурентами
						</li>
						<li>
							Управление на основе ИИ и предупреждение сетевых инцидентов -
							специализированный портал управления отслеживает состояние всех
							роутеров и точек доступа а также клиентских беспроводных
							устройств, сам пытается устранять сетевые проблемы
						</li>
						<li>
							Множество корпоративных функций управления в простом интерфейсе –
							контроль местонахождение и перемещение сотрудников в зоне
							беспроводной сети, реагирование на события, беспроводное
							видеонаблюдение, встроеный файервол и CaptivePortal и т.д.
						</li>
					</ul>
				</div>
				<AboutAdvantagesIllustration size={450} />
			</div>
		</>
	);
};

export default AboutTechnology;
