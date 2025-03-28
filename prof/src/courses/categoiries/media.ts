import { ICourse } from '../../interfaces';
import { createSummary, extractSelectedTagNames } from '../../_utils';
import { MEDIA_WRAPPER } from '../nodes';
import { _MOODLE_TOKEN } from '../../api';
import { drawCategoryBadge } from '../components/category-badge';
import { drawOpenButton } from '../components/open-button';
import { CourseCardComponents, drawCourseCard } from './_node-constructor';
import { drawBadge } from '../../modal/components/badge';
import { drawShowAllButton } from '../components/show-all-button';

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
	MEDIA_WRAPPER.innerHTML += drawShowAllButton('media');
};

const createMediaCourse = (course: ICourse | undefined) => {
	if (!course) return '';
	const { overviewfiles, fullname, shortname, categoryname, categoryid, summary, id } = course;

	const courseImage =
		overviewfiles.length === 0
			? `<img class="course-cover" src="./media.webp" alt="${shortname}" />`
			: `<img class="course-cover" src="${overviewfiles[0]?.fileurl}?token=${_MOODLE_TOKEN}" alt="${fullname}" />`;

	const tags = extractSelectedTagNames(course);
	const tagsBadge = tags.length > 0 ? drawBadge('Теги', tags.join(', '), 'tag') : '';
	const categoryBadge = drawCategoryBadge(categoryid, categoryname);

	const components: CourseCardComponents = {
		courseImage,
		name: fullname,
		badges: [tagsBadge, categoryBadge].join(''),
		description: createSummary(summary),
		openButton: drawOpenButton(id),
	};

	return drawCourseCard(components);
};

export { createMediaCourse, drawMediaCourses, getMediaCourses };
