import { ICourse } from '../interfaces';
import { createSummary } from '../_utils';
import * as api from '../api';
import { MEDIA_WRAPPER } from '../nodes';

const getMediaCourses = (courses: ICourse[]): ICourse[] => {
	return courses
		.filter(course => course.visible === 1)
		.filter(
			course =>
				course.categoryname === 'обучающие видео и видеопроекты' ||
				course.categoryname === 'статьи' ||
				course.categoryname === 'база презентаций' ||
				course.categoryname === 'электронные библиотеки' ||
				course.categoryname === 'книги и пособия'
		)
		.map(course => {
			return {
				...course,
				courseType: 'media',
			};
		});
};

const drawMediaCourses = (mediaCourses: ICourse[]) => {
	if (!MEDIA_WRAPPER) return null;

	const lastMedia = mediaCourses.sort((a, b) => (b.timecreated > a.timecreated ? 1 : -1));

	const video = lastMedia.find(course => course.categoryname === 'обучающие видео и видеопроекты');
	const article = lastMedia.find(course => course.categoryname === 'статьи');
	const book = lastMedia.find(course => course.categoryname === 'книги и пособия');

	const media = [video, article, book];

	const mediaCoursesNodes = media.map(m => createMediaCourse(m));

	MEDIA_WRAPPER.innerHTML = mediaCoursesNodes.join('');
};

const createMediaCourse = (course: ICourse | undefined) => {
	if (!course) return '';
	return `
						<article class="course-card group-card">
												${
													course.overviewfiles.length === 0
														? `<header class="course-header"><img class="course-cover" src="./media.webp" alt="${course.shortname}" /></header>`
														: `<header class="course-header"><img class="course-cover" src="${course.overviewfiles[0]?.fileurl}?token=${api._MOODLE_TOKEN}" alt="${course.fullname}" /></header>`
												}
						<main class="course-content">
							<h1 class="course-title">${course.fullname}</h1>
							<div class="course-topline">
								<p class="course-start">
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
										class="lucide lucide-tag">
										<path
											d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
										<path d="M7 7h.01" />
									</svg>
									Категория:
									<a href="https://edu2pro.ru/portal/course/index.php?categoryid=${course.categoryid}">${
										course.categoryname
									}</a>
								</p>
							</div>
							<p class="course-description">
								${createSummary(course.summary)}
							</p>
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
									<path d="m12 5 7 7-7 7" /></svg>
							</button>
						</main>
					</article>`;
};

// <a
// href="https://edu2pro.ru/portal/course/view.php?id=${course.id}"
// class="button button-sm ml-auto mt-auto block"
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
// ></a>

export { createMediaCourse, drawMediaCourses, getMediaCourses };
