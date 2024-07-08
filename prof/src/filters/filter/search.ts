import { Search } from '../../interfaces';
import { setFilterState } from '../state';
import { params } from '../URLSearchParams';
import { searchFilter } from './_nodes';

const drawSearchFilter = () => {
	if (!searchFilter) return null;

	searchFilter.value = params.search;

	searchFilter.addEventListener('input', (e: Event) => {
		const value: Search = (e.target as HTMLInputElement).value;
		setFilterState('search', value);
	});
};

export { drawSearchFilter };
