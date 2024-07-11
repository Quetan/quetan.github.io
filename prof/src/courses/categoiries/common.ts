import { createSummary, extractSelectedTagNames } from '../../_utils';
import { _MOODLE_TOKEN } from '../../api';
import { Category, ICourse } from '../../interfaces';
import { drawBadge } from '../../modal/components/badge';
import { drawOpenButton } from '../components/open-button';
import { CourseCardComponents, drawCourseCard } from './_node-constructor';

const categoryName: Record<Category, string> = {
	group: 'Обучение в группе',
	media: 'Профсоюзная медиатека',
	personal: 'Самостоятельное обучение',
	seminar: 'Семинары',
	all: 'Все курсы',
} as const;

const createCourse = (course: ICourse) => {
	if (!course) return '';
	const { overviewfiles, fullname, shortname, summary, id, courseType } = course;
	const courseImage =
		overviewfiles.length === 0
			? `<img class="course-cover" src="./media.webp" alt="${shortname}" />`
			: `<img class="course-cover" src="${overviewfiles[0]?.fileurl}?token=${_MOODLE_TOKEN}" alt="${shortname}" />`;
	const categoryBadge = courseType
		? drawBadge('Категория', categoryName[courseType], 'foruser')
		: '';
	const tags = extractSelectedTagNames(course);
	const tagsBadge = tags.length > 0 ? drawBadge('Теги', tags.join(', '), 'tag') : '';

	const components: CourseCardComponents = {
		courseImage,
		name: fullname,
		badges: [categoryBadge, tagsBadge].join(''),
		description: createSummary(summary),
		openButton: drawOpenButton(id),
	};

	return drawCourseCard(components);
};

export { createCourse };
