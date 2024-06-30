import { ICourse } from '../interfaces';
import { createSummary } from '../_utils';
import * as api from '../api';
import { SEMINAR_WRAPPER } from '../nodes';

const getSeminarCourses = (courses: ICourse[]) => {
	return (
		courses
			// .filter(
			// 	course => course.customfields.find(field => field.shortname === 'flagmain')?.value === 'Да'
			// )
			.filter(course => course.categoryname === 'Заседания и семинары')
	);
};

const drawSeminarCourses = (seminarCourses: ICourse[]) => {
	if (!SEMINAR_WRAPPER) return null;

	const seminarCoursesNodes = seminarCourses.slice(-3).map(course => {
		return createSeminarCourse(course);
	});

	SEMINAR_WRAPPER.innerHTML = seminarCoursesNodes.join('');
};

const createSeminarCourse = (course: ICourse | undefined) => {
	if (!course) return '';
	return `
						<article class="course-card group-card">
						${
							course.overviewfiles.length === 0
								? `<header class="course-header"><img class="course-cover" src="./coursecards/seminar${
										(course.id % 3) + 1
								  }.webp" alt="${course.shortname}" /></header>`
								: `<header class="course-header"><img class="course-cover" src="${course.overviewfiles[0]?.fileurl}?token=${api._MOODLE_TOKEN}" alt="${course.shortname}" /></header>`
						}
						<main class="course-content">
							<h1 class="course-title">${course.fullname}</h1>
							<div class="course-topline">
								<!--<p class="course-start">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="14"
										height="14"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-calendar-range">
										<rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
										<line x1="16" x2="16" y1="2" y2="6" />
										<line x1="8" x2="8" y1="2" y2="6" />
										<line x1="3" x2="21" y1="10" y2="10" />
										<path d="M17 14h-6" />
										<path d="M13 18H7" />
										<path d="M7 14h.01" />
										<path d="M17 18h.01" />
									</svg>
									Дата проведения: 28 ноября 2023 г.
								</p> -->	
							</div>
							<p class="course-description">${createSummary(course.summary)}</p>
							<a
								href="https://edu2pro.ru/portal/course/view.php?id=${course.id}"
								class="button button-sm ml-auto mt-auto block"
								>Подробнее
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="lucide lucide-arrow-right">
									<path d="M5 12h14" />
									<path d="m12 5 7 7-7 7" /></svg
							></a>
						</main>
					</article>
	`;
};

// <button
// class="button button-sm ml-auto mt-auto block open-course"
// data-course="${course.id}"
// >Подробнее
// <svg
// 	xmlns="http://www.w3.org/2000/svg"
// 	width="16"
// 	height="16"
// 	viewBox="0 0 24 24"
// 	fill="none"
// 	stroke="currentColor"
// 	stroke-width="2"
// 	stroke-linecap="round"
// 	stroke-linejoin="round"
// 	class="lucide lucide-arrow-right">
// 	<path d="M5 12h14" />
// 	<path d="m12 5 7 7-7 7" /></svg
// ></button>

export { createSeminarCourse, drawSeminarCourses, getSeminarCourses };
