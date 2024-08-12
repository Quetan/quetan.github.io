import { ICourse } from '../../interfaces';
import { createSummary, extractSelectedTagNames } from '../../_utils';
import { SEMINAR_WRAPPER } from '../nodes';
import { _MOODLE_TOKEN } from '../../api';
import { drawOpenButton } from '../components/open-button';
import { CourseCardComponents, drawCourseCard } from './_node-constructor';
import { drawBadge } from '../../modal/components/badge';
import { drawShowAllButton } from '../components/show-all-button';

const getSeminarCourses = (courses: ICourse[]): ICourse[] => {
	return courses
		.filter(course => course.visible === 1)
		.filter(course => course.categoryname === 'Заседания и семинары')
		.map(course => {
			return {
				...course,
				courseType: 'seminar',
			};
		});
};

const drawSeminarCourses = (seminarCourses: ICourse[]) => {
	if (!SEMINAR_WRAPPER) return null;

	const seminarCoursesNodes = seminarCourses.slice(-3).map(course => {
		return createSeminarCourse(course);
	});

	SEMINAR_WRAPPER.innerHTML = seminarCoursesNodes.join('');
	SEMINAR_WRAPPER.innerHTML += drawShowAllButton('seminar');
};

const createSeminarCourse = (course: ICourse | undefined) => {
	if (!course) return '';

	const { overviewfiles, fullname, shortname, summary, id } = course;

	const placeholderIndex = (id % 3) + 1;

	const courseImage =
		overviewfiles.length === 0
			? `<img class="course-cover" src="./coursecards/seminar${placeholderIndex}.webp" alt="${shortname}" />`
			: `<img class="course-cover" src="${overviewfiles[0].fileurl}?token=${_MOODLE_TOKEN}" alt="${shortname}" />`;

	const tags = extractSelectedTagNames(course);
	const tagsBadge = tags.length > 0 ? drawBadge('Теги', tags.join(', '), 'tag') : '';

	const components: CourseCardComponents = {
		courseImage,
		name: fullname,
		badges: [tagsBadge].join(''),
		description: createSummary(summary),
		openButton: drawOpenButton(id),
	};

	return drawCourseCard(components);
};

export { createSeminarCourse, drawSeminarCourses, getSeminarCourses };
