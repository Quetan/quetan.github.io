import './style.css';
import * as api from './api';

import { handleModal } from './modal';
import { mobileMenu } from './mobile';

import { drawPersonalCourses, getPersonalCourses } from './courses/personal';
import { drawGroupCourses, getGroupCourses } from './courses/group';
import { drawSeminarCourses, getSeminarCourses } from './courses/seminar';
import { drawMediaCourses, getMediaCourses } from './courses/media';

const initCourses = async () => {
	const courses = await api.getCourses();
	if (!courses) return null;

	const personalCourses = getPersonalCourses(courses);
	const groupCourses = getGroupCourses(courses);
	const seminarCourses = getSeminarCourses(courses);
	const mediaCourses = getMediaCourses(courses);

	drawPersonalCourses(personalCourses);
	drawGroupCourses(groupCourses);
	drawSeminarCourses(seminarCourses);
	drawMediaCourses(mediaCourses);

	handleModal(courses);
};

mobileMenu();
initCourses();
