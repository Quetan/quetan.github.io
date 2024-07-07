import { drawAllCourses } from '../courses';
import { FilterState } from '../interfaces';
import { categoryFilter, searchFilter, sortFilter, tagFilter } from './filter/_nodes';

const defaultState: FilterState = {
	search: '',
	type: 'all',
	tag: '',
	sort: 'new',
} as const;

let filterState: FilterState = Object.assign({}, defaultState);

function setFilterState<K extends keyof FilterState, V extends (typeof filterState)[K]>(
	key: K,
	value: V
): FilterState {
	filterState[key] = value;
	drawAllCourses();
	return filterState;
}

function resetFilterState(): FilterState {
	filterState = Object.assign({}, defaultState);

	if (categoryFilter) categoryFilter.value = filterState.type;
	if (tagFilter) tagFilter.value = filterState.tag;
	if (searchFilter) searchFilter.value = filterState.search;
	if (sortFilter) sortFilter.value = filterState.sort;

	drawAllCourses();
	return filterState;
}

export { filterState, setFilterState, resetFilterState };
export type { FilterState };
