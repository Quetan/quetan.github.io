import { ICourse } from '../interfaces';
import { drawGroupCourses, getGroupCourses } from './group';
import { drawMediaCourses, getMediaCourses } from './media';
import { drawPersonalCourses, getPersonalCourses } from './personal';
import { drawSeminarCourses, getSeminarCourses } from './seminar';

const drawCourses = (courses: ICourse[]) => {
	const personalCourses = getPersonalCourses(courses);
	const groupCourses = getGroupCourses(courses);
	const seminarCourses = getSeminarCourses(courses);
	const mediaCourses = getMediaCourses(courses);

	drawPersonalCourses(personalCourses);
	drawGroupCourses(groupCourses);
	drawSeminarCourses(seminarCourses);
	drawMediaCourses(mediaCourses);
};

export { drawCourses };
