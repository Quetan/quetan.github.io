import { drawAllCourses } from '../courses';
import { FilterState } from '../interfaces';
import { categoryFilter, searchFilter, sortFilter, tagFilter } from './filter/_nodes';
import { params, setURLSearchParam } from './URLSearchParams';

const defaultState: FilterState = {
	search: '',
	type: 'all',
	tag: '',
	sort: 'new',
} as const;

let filterState: FilterState = Object.assign({}, params);

function setFilterState<K extends keyof FilterState, V extends (typeof filterState)[K]>(
	key: K,
	value: V
): FilterState {
	filterState[key] = value;
	setURLSearchParam(key, value);
	drawAllCourses();
	return filterState;
}

function resetFilterState(): FilterState {
	filterState = Object.assign({}, defaultState);

	if (categoryFilter) categoryFilter.value = filterState.type;
	if (tagFilter) tagFilter.value = filterState.tag;
	if (searchFilter) searchFilter.value = filterState.search;
	if (sortFilter) sortFilter.value = filterState.sort;

	setURLSearchParam('search', filterState.search);
	setURLSearchParam('type', filterState.type);
	setURLSearchParam('tag', filterState.tag);
	setURLSearchParam('sort', filterState.sort);

	drawAllCourses();
	return filterState;
}

export { filterState, setFilterState, resetFilterState };
export type { FilterState };
