import { resetFilterState } from '../state';
import { resetFilters } from './_nodes';

const drawResetFilters = () => {
	if (!resetFilters) return null;
	resetFilters.addEventListener('click', resetFilterState);
};

export { resetFilters, drawResetFilters };
