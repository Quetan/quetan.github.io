import './style.css';
import { mobileMenu } from './mobile';

import { drawAllCourses, drawCourses } from './courses';
import { drawFilters } from './filters';
import { courses } from './api';

const initCourses = () => {
	if (!courses) return null;
	drawCourses(courses);
};

const initFilters = () => {
	if (!courses) return null;
	drawFilters();
	drawAllCourses();
};

mobileMenu();
initCourses();
initFilters();
