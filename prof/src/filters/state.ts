import { drawAllCourses } from '../courses';
import { FilterState } from '../interfaces';
import { categoryFilter, searchFilter, sortFilter, tagFilter } from './filter/_nodes';
import { params, setURLSearchParam } from './URLSearchParams';

const defaultState: FilterState = {
	search: '',
	type: 'all',
	tag: 'all',
	sort: 'new',
} as const;

let filterState: FilterState = { ...params };

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
	filterState = { ...defaultState };

	const { type, tag, search, sort } = filterState;

	if (categoryFilter) categoryFilter.value = type;
	if (tagFilter) tagFilter.value = tag;
	if (searchFilter) searchFilter.value = search;
	if (sortFilter) sortFilter.value = sort;

	setURLSearchParam('search', search);
	setURLSearchParam('type', type);
	setURLSearchParam('tag', tag);
	setURLSearchParam('sort', sort);

	drawAllCourses();

	return filterState;
}

export { filterState, setFilterState, resetFilterState };
export type { FilterState };
