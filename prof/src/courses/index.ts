import { ICourse } from '../interfaces';
import { drawGroupCourses, getGroupCourses } from './group';
import { drawMediaCourses, getMediaCourses } from './media';
import { drawPersonalCourses, getPersonalCourses } from './personal';
import { drawSeminarCourses, getSeminarCourses } from './seminar';
import { courses } from '../api';
import { filterCourses } from '../filters';
import { createCourse } from './common';

const drawCourses = (courses: ICourse[]): void => {
	const personalCourses = getPersonalCourses(courses);
	const groupCourses = getGroupCourses(courses);
	const seminarCourses = getSeminarCourses(courses);
	const mediaCourses = getMediaCourses(courses);

	personalCourses && drawPersonalCourses(personalCourses);
	groupCourses && drawGroupCourses(groupCourses);
	seminarCourses && drawSeminarCourses(seminarCourses);
	mediaCourses && drawMediaCourses(mediaCourses);
};

const wrapper = document.getElementById('filtered-courses');

const drawAllCourses = async () => {
	if (!wrapper || !courses) return null;

	const personalCourses = getPersonalCourses(courses);
	const groupCourses = getGroupCourses(courses);
	const seminarCourses = getSeminarCourses(courses);
	const mediaCourses = getMediaCourses(courses);

	const allCourses = [...personalCourses, ...groupCourses, ...mediaCourses, ...seminarCourses];

	const filteredCourses = filterCourses(allCourses);

	wrapper.innerHTML = '';

	if (filteredCourses.length === 0)
		wrapper.innerHTML = '<p class="no-courses">Подходящих курсов не найдено</p>';

	filteredCourses.forEach(course => {
		wrapper.innerHTML += createCourse(course);
	});
};

export { drawCourses, drawAllCourses };
