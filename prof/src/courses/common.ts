import { createSummary } from '../_utils';
import { _MOODLE_TOKEN } from '../api';
import { Category, ICourse } from '../interfaces';
import { drawBadge } from '../modal/components/badge';

const categoryName: Record<Category, string> = {
	group: 'Обучение в группе',
	media: 'Профсоюзная медиатека',
	personal: 'Самостоятельное обучение',
	seminar: 'Семинары',
	all: 'Все курсы',
};

const createCourse = (course: ICourse) => {
	return `
        <article class="course-card group-card">
        ${
					course.overviewfiles.length === 0
						? `<header class="course-header"><img class="course-cover" src="./media.webp" alt="${course.shortname}" /></header>`
						: `<header class="course-header"><img class="course-cover" src="${course.overviewfiles[0]?.fileurl}?token=${_MOODLE_TOKEN}" alt="${course.fullname}" /></header>`
				}
        <main class="course-content">
            <h1 class="course-title">${course.fullname}</h1>
            <div class="course-topline">
                <p>${
									course.courseType
										? drawBadge('Категория', categoryName[course.courseType], 'tag')
										: ''
								}</p>
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

export { createCourse };
