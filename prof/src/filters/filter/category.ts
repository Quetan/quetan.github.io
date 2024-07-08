import { Category } from '../../interfaces';
import { setFilterState } from '../state';
import { params } from '../URLSearchParams';
import { categoryFilter } from './_nodes';

const drawCategoryFilter = () => {
	if (!categoryFilter) return null;

	categoryFilter.innerHTML = `
		<option value="all">Все</option>
		<option value="personal">Самостоятельное обучение</option>
		<option value="group">Обучение в группе</option>
		<option value="seminar">Семинары</option>
		<option value="media">Медиатека</option>
	`;

	categoryFilter.value = params.type;

	categoryFilter.addEventListener('change', (e: Event) => {
		const value: Category = (e.target as HTMLSelectElement).value as Category;
		setFilterState('type', value);
	});
};

export { drawCategoryFilter };
