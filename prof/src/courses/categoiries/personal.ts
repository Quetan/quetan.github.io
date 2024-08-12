import { ICourse } from '../../interfaces';
import { createSummary, extractContent, extractSelectedTagNames } from '../../_utils';
import * as api from '../../api';
import { IND_WRAPPER } from '../nodes';
import { drawAuthors } from '../../modal/components/authors';
import { drawBadge } from '../../modal/components/badge';
import { drawOpenButton } from '../components/open-button';
import { CourseCardComponents, drawCourseCard } from './_node-constructor';
import { drawShowAllButton } from '../components/show-all-button';

const getPersonalCourses = (courses: ICourse[]): ICourse[] => {
	return courses
		.filter(course => course.visible === 1)
		.filter(
			course => course.customfields.find(field => field.shortname === 'flagmain')?.value === 'Да'
		)
		.filter(course => course.categoryname === 'Cамостоятельное обучение')
		.map(course => {
			return {
				...course,
				courseType: 'personal',
			};
		});
};

const drawPersonalCourses = (personalCourses: ICourse[]) => {
	if (!IND_WRAPPER) return null;
	const personalCoursesNodes = personalCourses.slice(-3).map(course => {
		return createPersonalCourse(course);
	});
	IND_WRAPPER.innerHTML = personalCoursesNodes.join('');
	IND_WRAPPER.innerHTML += drawShowAllButton('personal');
};

const createPersonalCourse = (course: ICourse | undefined) => {
	if (!course) return '';

	const { customfields, overviewfiles, fullname, shortname, summary, id } = course;

	const foruser = extractContent(
		customfields.find(field => field.shortname === 'foruser')?.value ?? ''
	);

	const foruserBadge = drawBadge('Для кого', foruser, 'foruser');
	const startBadge = drawBadge('Дата начала', 'в любое время', 'date');

	const placeholderIndex = (id % 3) + 1;

	const courseImage =
		overviewfiles.length === 0
			? `<img class="course-cover" src="./coursecards/sam${placeholderIndex}.webp" alt="${shortname}" />`
			: `<img class="course-cover" src="${overviewfiles[0].fileurl}?token=${api._MOODLE_TOKEN}" alt="${shortname}" />`;

	const tags = extractSelectedTagNames(course);
	const tagsBadge = tags.length > 0 ? drawBadge('Теги', tags.join(', '), 'tag') : '';

	const components: CourseCardComponents = {
		courseImage,
		name: fullname,
		badges: [tagsBadge, startBadge, foruserBadge].join(''),
		description: createSummary(summary),
		openButton: drawOpenButton(id),
		authors: drawAuthors(course),
	};

	return drawCourseCard(components);
};

export { createPersonalCourse, drawPersonalCourses, getPersonalCourses };
