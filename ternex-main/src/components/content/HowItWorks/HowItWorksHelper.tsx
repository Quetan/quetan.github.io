import Helper from "@/components/helper/Helper";
import type { FC } from "react";

const HowItWorksHelper: FC = () => {
	return (
		<Helper title="Нужна помощь?">
			<ul className="flex flex-col gap-2 list-disc pl-6">
				<li>
					Документация —{" "}
					<a
						className="text-muted-foreground underline-offset-2 hover:underline"
						target="_blank"
						href="https://ternex.ru/static/landing/html/doc.html"
					>
						ternex.ru/docs
					</a>
				</li>
				<li>
					Запрос в систему поддержки в личном кабинете Email —{" "}
					<a
						className="text-muted-foreground underline-offset-2 hover:underline"
						target="_blank"
						href="mailto:support@ternex.ru"
					>
						support@ternex.ru
					</a>
				</li>
				<li>
					Публичный чат поддержки —{" "}
					<a
						className="text-muted-foreground underline-offset-2 hover:underline"
						target="_blank"
						href="https://t.me/ternex_setup"
					>
						@ternex_setup
					</a>
				</li>
				<li>
					Видео-уроки —{" "}
					<a
						className="text-muted-foreground underline-offset-2 hover:underline"
						target="_blank"
						href="https://www.youtube.com/@ternex_mesh"
					>
						youtube/@ternex_mesh
					</a>{" "}
				</li>
			</ul>
		</Helper>
	);
};

export default HowItWorksHelper;
