import { Category, FilterState, Sort, Tag } from '../interfaces';
import { filterState } from './state';

const queryString = window.location.search;
const searchParams = new URLSearchParams(queryString);

function setURLSearchParam<K extends keyof FilterState, V extends (typeof filterState)[K]>(
	key: K,
	value: V
) {
	const url = new URL(window.location.href);
	url.searchParams.set(key, value);
	window.history.pushState({ path: url.href }, '', url.href);
}

const params: FilterState = {
	search: searchParams.get('search') || '',
	type: (searchParams.get('type') as Category) || ('all' as Category),
	tag: (searchParams.get('tag') as Tag) || ('all' as Tag),
	sort: (searchParams.get('sort') as Sort) || ('new' as Sort),
};

export { queryString, searchParams, params, setURLSearchParam };
