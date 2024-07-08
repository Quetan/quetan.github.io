import { ICourse, Tag } from '../../interfaces';
import { setFilterState } from '../state';
import { params } from '../URLSearchParams';
import { tagFilter } from './_nodes';

const drawTagFilter = (courses: ICourse[]) => {
	if (!tagFilter) return null;

	tagFilter.value = params.tag;

	console.log(courses);

	tagFilter.innerHTML = `
		<option value="all">Все</option>
		<option value="personal">Самостоятельное обучение</option>
		<option value="group">Обучение в группе</option>
		<option value="seminar">Семинары</option>
		<option value="media">Медиатека</option>
	`;

	tagFilter.addEventListener('change', (e: Event) => {
		const value: Tag = (e.target as HTMLSelectElement).value;
		setFilterState('tag', value);
	});
};

export { drawTagFilter };
