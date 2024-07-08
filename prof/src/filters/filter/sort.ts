import { Sort } from '../../interfaces';
import { setFilterState } from '../state';
import { params } from '../URLSearchParams';
import { sortFilter } from './_nodes';

const drawSortFilter = () => {
	if (!sortFilter) return null;

	sortFilter.value = params.sort;

	sortFilter.addEventListener('change', (e: Event) => {
		const value: Sort = (e.target as HTMLSelectElement).value as Sort;
		setFilterState('sort', value);
	});
};

export { drawSortFilter };
