import { Sort } from '../../interfaces';
import { setFilterState } from '../state';
import { sortFilter } from './_nodes';

const drawSortFilter = () => {
	if (!sortFilter) return null;

	sortFilter.addEventListener('change', (e: Event) => {
		const value: Sort = (e.target as HTMLSelectElement).value as Sort;
		setFilterState('sort', value);
	});
};

export { drawSortFilter };
