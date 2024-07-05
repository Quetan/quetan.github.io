import { ICourse } from '../../interfaces';
import { drawProgram } from './program';
import { drawTestimonials } from './testimonials';

const drawElement = (content: string, title: string) => {
	return content
		? `
		<div class="modal-content-element">
			<p><strong>${title}:</strong></p>
			<span style="padding-left: 1rem;">${content}</span>
		</div>
		`
		: '';
};

const drawContent = (course: ICourse) => {
	const description =
		course.customfields.find(field => field.shortname === 'fulldesc')?.value ?? '';
	const goal = course.customfields.find(field => field.shortname === 'purposeofkurs')?.value ?? '';
	const tasks =
		course.customfields.find(field => field.shortname === 'objectiveskurs')?.value ?? '';
	const result = course.customfields.find(field => field.shortname === 'resultkurs')?.value ?? '';
	const competencies =
		course.customfields.find(field => field.shortname === 'competencieskurs')?.value ?? '';
	const control = course.customfields.find(field => field.shortname === 'kontrolkurs')?.value ?? '';
	const duration =
		course.customfields.find(field => field.shortname === 'durationkurs')?.value ?? '';

	return `<div class="modal-content">
				${drawElement(description, 'Описание курса')}
				${drawElement(goal, 'Цель курса')}
				${drawElement(tasks, 'Задачи курса')}
				${drawElement(result, 'Результаты курса')}
				${drawElement(competencies, 'Компетеции, необходимые для зачисления на курс')}
				${drawElement(control, 'Промежуточный итоговый контроль')}
				${drawElement(duration, 'Длительность курса')}	

				${drawProgram(course)}

				${drawTestimonials(course)}
			</div>`;
};

export { drawContent };
