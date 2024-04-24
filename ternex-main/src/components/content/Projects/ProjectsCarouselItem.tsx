import type { FC } from "react";
import { IProject } from "./projects";
import { CarouselItem } from "@/components/ui/carousel";

interface IProps {
	project: IProject;
}

const ProjectsCarouselItem: FC<IProps> = ({ project }) => {
	return (
		<CarouselItem>
			<article className="grid grid-cols-1 items-center lg:grid-cols-[45%_1fr] gap-12 overflow-hidden">
				<div className="w-full">
					<h1 className="text-3xl font-medium mb-4">{project.title}</h1>
					<p className="text-muted-foreground">{project.description}</p>
				</div>
				<figure>
					<img
						className="w-full h-auto aspect-[5/3] object-cover filter  grayscale-[0.35] shadow-2xl shadow-accent-foreground dark:shadow-muted rounded-lg max-h-[380px]"
						src={project.thumbnail}
						alt={project.title}
					/>
				</figure>
			</article>
		</CarouselItem>
	);
};

export default ProjectsCarouselItem;
