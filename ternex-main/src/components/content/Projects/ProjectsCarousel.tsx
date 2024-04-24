import type { FC } from "react";
import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { projects } from "./projects";
import ProjectsCarouselItem from "./ProjectsCarouselItem";

const ProjectsCarousel: FC = () => {
	return (
		<Carousel>
			<CarouselContent>
				{projects.map((project) => (
					<ProjectsCarouselItem key={project.title} project={project} />
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
};

export default ProjectsCarousel;
