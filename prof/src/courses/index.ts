import { ICourse } from '../interfaces';
import { drawGroupCourses, getGroupCourses } from './group';
import { drawMediaCourses, getMediaCourses } from './media';
import { drawPersonalCourses, getPersonalCourses } from './personal';
import { drawSeminarCourses, getSeminarCourses } from './seminar';
import { filterCourses } from '../filters';
import { createCourse } from './common';
import { getCourses } from '../api';
import { handleModal } from '../modal';

const drawCourses = (courses: ICourse[]): void => {
	const personalCourses = getPersonalCourses(courses);
	const groupCourses = getGroupCourses(courses);
	const seminarCourses = getSeminarCourses(courses);
	const mediaCourses = getMediaCourses(courses);

	personalCourses && drawPersonalCourses(personalCourses);
	groupCourses && drawGroupCourses(groupCourses);
	seminarCourses && drawSeminarCourses(seminarCourses);
	mediaCourses && drawMediaCourses(mediaCourses);

	handleModal(courses);
};

const wrapper = document.getElementById('filtered-courses');

const drawAllCourses = async () => {
	const courses = await getCourses();
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

	handleModal(courses);
};

export { drawCourses, drawAllCourses };
