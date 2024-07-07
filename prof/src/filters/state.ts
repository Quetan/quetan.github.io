import { categoryFilter, searchFilter, sortFilter, tagFilter } from './filter/_nodes';

type Category = 'all' | 'personal' | 'group' | 'seminar' | 'media';
type Sort = 'new' | 'old';
type Tag = string;
type Search = string;

interface FilterState {
	search: Search;
	type: Category;
	tag: Tag;
	sort: Sort;
}

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
	return filterState;
}

function resetFilterState(): FilterState {
	filterState = Object.assign({}, defaultState);

	if (categoryFilter) categoryFilter.value = filterState.type;
	if (tagFilter) tagFilter.value = filterState.tag;
	if (searchFilter) searchFilter.value = filterState.search;
	if (sortFilter) sortFilter.value = filterState.sort;

	return filterState;
}

export { filterState, setFilterState, resetFilterState };
export type { Category, Sort, Tag, Search, FilterState };
