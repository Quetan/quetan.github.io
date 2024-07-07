import { drawCategoryFilter } from './filter/category';
import { drawSearchFilter } from './filter/search';
import { drawTagFilter } from './filter/tag';
import { drawSortFilter } from './filter/sort';
import { drawResetFilters } from './filter/_reset';
import { ICourse } from '../interfaces';
import { filterState } from './state';

const drawFilters = (courses: ICourse[]) => {
	drawCategoryFilter();
	drawTagFilter(courses);
	drawSearchFilter();
	drawSortFilter();
	drawResetFilters();
};

const filterCourses = (courses: ICourse[]) => {
	const filteredByType =
		filterState.type === 'all'
			? courses
			: courses.filter(course => course.courseType === filterState.type);

	const filteredBySearch = filteredByType.filter(course =>
		course.fullname.toLowerCase().includes(filterState.search.toLowerCase())
	);

	const filteredByDate = filteredBySearch.sort((a, b) => {
		if (filterState.sort === 'new') {
			if (a.timecreated < b.timecreated) return 1;
			return -1;
		}
		if (filterState.sort === 'old') {
			if (a.timecreated > b.timecreated) return 1;
			return -1;
		}
		return 0;
	});

	return filteredByDate;
};

export { drawFilters, filterCourses };
