import { ICourse } from '../../interfaces';
import { createSummary, extractContent, extractSelectedTags } from '../../_utils';
import { GROUP_WRAPPER } from '../nodes';
import { _MOODLE_TOKEN } from '../../api';
import { drawBadge } from '../../modal/components/badge';
import { drawOpenButton } from '../components/open-button';
import { CourseCardComponents, drawCourseCard } from './_node-constructor';
import { drawAuthors } from '../../modal/components/authors';

const getGroupCourses = (courses: ICourse[]): ICourse[] => {
	return courses
		.filter(course => course.visible === 1)
		.filter(
			course => course.customfields.find(field => field.shortname === 'flagmain')?.value === 'Да'
		)
		.filter(course => course.categoryname === 'Групповое обучение')
		.map(course => {
			return {
				...course,
				courseType: 'group',
			};
		});
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

	const { customfields, overviewfiles, fullname, shortname, summary, id } = course;

	const duration = extractContent(
		customfields.find(field => field.shortname === 'durationkurs')?.value ?? ''
	);
	const foruser = extractContent(
		customfields.find(field => field.shortname === 'foruser')?.value ?? ''
	);
	const durationBadge = drawBadge('Продолжительность', duration, 'duration');
	const foruserBadge = drawBadge('Для кого', foruser, 'foruser');
	const courseImage =
		overviewfiles.length === 0
			? `<img class="course-cover" src="./coursecards/contract2.webp" alt="${shortname}" />`
			: `<img class="course-cover" src="${overviewfiles[0]?.fileurl}?token=${_MOODLE_TOKEN}" alt="${shortname}" />`;

	const tags = extractSelectedTags(course);
	const tagsBadge = tags.length > 0 ? drawBadge('Теги', tags.join(', '), 'tag') : '';

	const components: CourseCardComponents = {
		courseImage,
		name: fullname,
		badges: [tagsBadge, durationBadge, foruserBadge].join(''),
		description: createSummary(summary),
		openButton: drawOpenButton(id),
		authors: drawAuthors(course),
	};

	return drawCourseCard(components);
};

export { createGroupCourse, drawGroupCourses, getGroupCourses };
