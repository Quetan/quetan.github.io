import { type Search, setFilterState } from '../state';
import { searchFilter } from './_nodes';

const drawSearchFilter = () => {
	if (!searchFilter) return null;

	searchFilter.addEventListener('input', (e: Event) => {
		const value: Search = (e.target as HTMLInputElement).value;
		setFilterState('search', value);
	});
};

export { drawSearchFilter };
