import './style.css';
import * as api from './api';

import { handleModal } from './modal';
import { mobileMenu } from './mobile';

import { drawCourses } from './courses';
import { drawFilters } from './filters';

const initCourses = async () => {
	const courses = await api.getCourses();
	if (!courses) return null;

	drawCourses(courses);
	handleModal(courses);
};

const initFilters = async () => {
	const courses = await api.getCourses();
	if (!courses) return null;

	drawFilters(courses);
	handleModal(courses);
};

mobileMenu();
initCourses();
initFilters();
