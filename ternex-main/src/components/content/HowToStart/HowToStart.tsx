import { Button } from "@/components/ui/button";
import type { FC } from "react";
import HowToStartIllustration from "./HowToStartIllustration";

const HowToStart: FC = () => {
	return (
		<div className="flex flex-col gap-12 relative">
			<p className="text-xl leading-relaxed">
				Приобретите оборудование с предустановленным программным обеспечением
				Ternex или закажите услугу создания сетевой инфраструктуры под ключ
			</p>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				<article className="flex flex-col gap-4 bg-muted/40 backdrop-blur p-6 rounded-lg border-primary/30 border-2">
					<h1 className="text-center text-2xl font-medium">Для частных лиц</h1>
					<p>
						Ищите роутеры с предустановленным программным обеспечением Ternex у
						наших партнеров.
					</p>
					<p className="text-muted-foreground">
						Не смогли ничего подобрать? Менеджер подберет для Ваc оптимальную
						модель и способ доставки.
					</p>
					<Button size="lg" className="w-max mx-auto mt-auto" asChild>
						<a href="#contacts">Оставить заявку</a>
					</Button>
				</article>
				<article className="flex flex-col gap-4 bg-muted/40 backdrop-blur p-6 rounded-lg border-primary/30 border-2">
					<h1 className="text-center text-2xl font-medium">Для организаций</h1>
					<p>
						Нужна большая партия оборудования или компьютерная сеть
						корпоративного уровня?
					</p>
					<p className="text-muted-foreground">
						Наши специалисты бесплатно подготовят первичный проект сетевой
						инфраструктуры и подберут оптимальную аппаратную часть.
					</p>
					<Button size="lg" className="w-max mx-auto mt-auto" asChild>
						<a href="#contacts">Оставить заявку</a>
					</Button>
				</article>
			</div>
			<div className="absolute -z-10 top-1/2 -translate-y-1/2 left-0 -translate-x-3/4 opacity-25">
				<HowToStartIllustration size={window.innerWidth < 768 ? 0 : 750} />
			</div>
		</div>
	);
};

export default HowToStart;
