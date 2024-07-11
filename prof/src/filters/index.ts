import { drawCategoryFilter } from './filter/category';
import { drawSearchFilter } from './filter/search';
import { drawTagFilter } from './filter/tag';
import { drawSortFilter } from './filter/sort';
import { drawResetFilters } from './filter/_reset';
import { ICourse } from '../interfaces';
import { filterState } from './state';
import { extractSelectedTags } from '../_utils';

const drawFilters = () => {
	drawCategoryFilter();
	drawTagFilter();
	drawSearchFilter();
	drawSortFilter();
	drawResetFilters();
};

const filterCourses = (courses: ICourse[]) => {
	const searchLower = filterState.search.toLowerCase();
	const type = filterState.type;
	const sortOrder = filterState.sort === 'new' ? 1 : -1;
	const tag = filterState.tag;

	const filteredCourses = courses.filter(course => {
		const matchesType = type === 'all' || course.courseType === type;
		const matchesTag = tag === 'all' || extractSelectedTags(course).includes(tag);
		const matchesSearch =
			course.fullname.toLowerCase().includes(searchLower) || course.summary.includes(searchLower);

		return matchesType && matchesTag && matchesSearch;
	});

	filteredCourses.sort((a, b) => {
		if (a.timecreated < b.timecreated) return sortOrder;
		if (a.timecreated > b.timecreated) return -sortOrder;
		return 0;
	});

	return filteredCourses;
};

export { drawFilters, filterCourses };
