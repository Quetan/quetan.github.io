import './style.css';

import { handleModal } from './modal';
import { mobileMenu } from './mobile';

import { drawAllCourses, drawCourses } from './courses';
import { drawFilters } from './filters';
import { courses } from './api';

const initCourses = async () => {
	if (!courses) return null;
	drawCourses(courses);
	handleModal(courses);
};

const initFilters = async () => {
	if (!courses) return null;
	drawFilters(courses);
	handleModal(courses);
	drawAllCourses();
};

mobileMenu();
initCourses();
initFilters();
