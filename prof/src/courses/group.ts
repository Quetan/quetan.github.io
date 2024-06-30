import { ICourse } from '../interfaces';
import { createSummary, extractContent } from '../_utils';
import * as api from '../api';
import { GROUP_WRAPPER } from '../nodes';
import { drawAuthors } from '../modal/components/authors';

const getGroupCourses = (courses: ICourse[]) => {
	return courses
		.filter(
			course => course.customfields.find(field => field.shortname === 'flagmain')?.value === 'Да'
		)
		.filter(course => course.categoryname === 'Групповое обучение');
};

const drawGroupCourses = (groupCourses: ICourse[]) => {
	if (!GROUP_WRAPPER) return null;

	const groupCoursesNodes = groupCourses.slice(-3).map(course => {
		return createGroupCourse(course);
	});

	GROUP_WRAPPER.innerHTML = groupCoursesNodes.join('');
};

const createGroupCourse = (course: ICourse | undefined) => {
	if (!course) return '';
	const duration =
		course.customfields.find(field => field.shortname === 'durationkurs')?.value ?? '';
	const foruser = course.customfields.find(field => field.shortname === 'foruser')?.value ?? '';
	return `
						<article class="course-card group-card">
						${
							course.overviewfiles.length === 0
								? `<header class="course-header"><img class="course-cover" src="./coursecards/contract2.webp" alt="${course.shortname}" /></header>`
								: `<header class="course-header"><img class="course-cover" src="${course.overviewfiles[0]?.fileurl}?token=${api._MOODLE_TOKEN}" alt="${course.fullname}" /></header>`
						}
						<main class="course-content">
							<h1 class="course-title">${course.fullname}</h1>
							<div class="course-topline">
								<!-- <p class="course-start">
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
									Дата начала: 15.03.2024
								</p> -->
								${
									duration
										? `
								<p class="course-duration">
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
										class="lucide lucide-clock-3">
										<circle cx="12" cy="12" r="10" />
										<polyline points="12 6 12 12 16.5 12" />
									</svg>
									Продолжительность: ${extractContent(duration)}
								</p>
									`
										: ''
								}
								${
									foruser
										? `
									<p class="course-duration">
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
										class="lucide lucide-users-round">
										<path d="M18 21a8 8 0 0 0-16 0" />
										<circle cx="10" cy="8" r="5" />
										<path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
									</svg>
									Для кого: ${foruser}
								</p>
									`
										: ''
								}
								
							</div>
							<p class="course-description">${createSummary(course.summary)}</p>
							${drawAuthors(course)}
							<button
								class="button button-sm ml-auto mt-auto block open-course"
								data-course="${course.id}"
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
							></button>
						</main>
					</article>`;
};

export { createGroupCourse, drawGroupCourses, getGroupCourses };
