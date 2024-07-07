import axios from 'axios';
import { ICourse } from './interfaces';

const _MOODLE_BASE_URL: string = 'https://edu2pro.ru/portal';
const _MOODLE_API_URL: string = `${_MOODLE_BASE_URL}/webservice/rest/server.php`;
const _MOODLE_TOKEN: string = '652c71f433ea0d910b172fa0b9f224bf';
const _MOODLE_FUNCTION: string = 'core_course_get_courses_by_field';
const _MOODLE_REST_FORMAT: string = 'json';

let isPending: boolean = false;

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
			return res.data.courses as ICourse[];
		});
}

const courses = await getCourses();

export {
	_MOODLE_BASE_URL,
	_MOODLE_API_URL,
	_MOODLE_TOKEN,
	_MOODLE_FUNCTION,
	_MOODLE_REST_FORMAT,
	getCourses,
	courses,
	isPending,
};
