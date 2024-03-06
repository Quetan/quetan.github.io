import Helper from "@/components/helper/Helper";
import type { FC } from "react";

const AboutTechnologyHelper: FC = () => {
	return (
		<Helper title="Наши главные отличия от конкурентов">
			<ul className="flex flex-col gap-2 list-disc pl-6">
				<li>
					Собственный mesh протокол передачи данных и управления беспроводными
					устройствами. Позволяет создавать по-настоящему масштабные
					беспроводные сети и заменять традиционные кабельные подключения.
				</li>
				<li>
					Облачный портал управления видит каждое сопряжённое устройство и
					управляет ими с использованием сигнатур и искусственного интеллекта.
					Позволяет отказаться от Wi-Fi контролера.
				</li>
			</ul>
		</Helper>
	);
};

export default AboutTechnologyHelper;
