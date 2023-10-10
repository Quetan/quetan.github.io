import axios from 'axios';
import { Course } from './interfaces';
import Splide from '@splidejs/splide';
import './style.css';
import '@splidejs/splide/css/sea-green';

const _MOODLE_BASE_URL: string = 'https://edu2pro.ru';
const _MOODLE_API_URL: string = `${_MOODLE_BASE_URL}/webservice/rest/server.php`;
const _MOODLE_TOKEN: string = '652c71f433ea0d910b172fa0b9f224bf';
const _MOODLE_FUNCTION: string = 'core_course_get_courses_by_field';
const _MOODLE_REST_FORMAT: string = 'json';

const TABS_CONTAINER = document.querySelector('#_courses');
const LINKS_CONTAINER = document.querySelector('#_courses_links');

function getCourses() {
	return axios
		.get(_MOODLE_API_URL, {
			method: 'get',
			params: {
				wsfunction: _MOODLE_FUNCTION,
				moodlewsrestformat: _MOODLE_REST_FORMAT,
				wstoken: _MOODLE_TOKEN,
			},
		})
		.then(res => {
			if (res.status >= 400) return null;
			return res.data.courses;
		});
}

function createCourse(course: Course) {
	if (course.overviewfiles.length === 0) return;
	return `					
  <a href="${_MOODLE_BASE_URL}/course/view.php?id=${
		course.id
	}" target="_blank" class="courses-item">
    <figure>
      <img src="${course.overviewfiles[0]?.fileurl}?token=${_MOODLE_TOKEN}" alt="${
				course.fullname
			}" />
      <figcaption>
        <span class="courses-title">${course.fullname}</span>
        ${course.summary ? `<span class="courses-description">${course.summary}</span>` : ''}
      </figcaption>
    </figure>
  </a>
  `;
}

function createCourseLinks(course: Course) {
	if (course.overviewfiles.length === 0) return;
	return `					
  <a href="${_MOODLE_BASE_URL}/course/view.php?id=${course.id}" target="_blank" class="courses-link">${course.fullname}</a> | 
  `;
}

function generateCoursesTabs(courses: Course[]) {
	if (!courses) return;
	return courses.map(course => {
		return createCourse(course);
	});
}
function generateCoursesLinks(courses: Course[]) {
	if (!courses) return;
	return courses.map(course => {
		return createCourseLinks(course);
	});
}

async function initCourses() {
	const courses = await getCourses();

	const COURSE_TABS_NODES = generateCoursesTabs(courses);
	const COURSES_LINKS_NODES = generateCoursesLinks(courses);

	COURSE_TABS_NODES?.forEach(course => {
		if (!course) return;
		TABS_CONTAINER!.innerHTML += course;
	});
	COURSES_LINKS_NODES?.forEach(course => {
		if (!course) return;
		LINKS_CONTAINER!.innerHTML += course;
	});
}

initCourses();

// Slider

document.addEventListener('DOMContentLoaded', () => {
	let splide = new Splide('#reviews');
	splide.mount();
});
