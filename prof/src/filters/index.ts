import { drawCategoryFilter } from './filter/category';
import { drawSearchFilter } from './filter/search';
// import { drawTagFilter } from './filter/tag';
import { drawSortFilter } from './filter/sort';
import { drawResetFilters } from './filter/_reset';
import { ICourse } from '../interfaces';
import { filterState } from './state';

const drawFilters = () => {
	drawCategoryFilter();
	// drawTagFilter(courses);
	drawSearchFilter();
	drawSortFilter();
	drawResetFilters();
};

// const filterCourses = (courses: ICourse[]) => {
// 	const filteredByType =
// 		filterState.type === 'all'
// 			? courses
// 			: courses.filter(course => course.courseType === filterState.type);

// 	const filteredBySearch = filteredByType.filter(course =>
// 		course.fullname.toLowerCase().includes(filterState.search.toLowerCase())
// 	);

// 	const filteredByDate = filteredBySearch.sort((a, b) => {
// 		if (filterState.sort === 'new') {
// 			if (a.timecreated < b.timecreated) return 1;
// 			return -1;
// 		}
// 		if (filterState.sort === 'old') {
// 			if (a.timecreated > b.timecreated) return 1;
// 			return -1;
// 		}
// 		return 0;
// 	});

// 	return filteredByDate;
// };

const filterCourses = (courses: ICourse[]) => {
	const searchLower = filterState.search.toLowerCase();
	const type = filterState.type;
	const sortOrder = filterState.sort === 'new' ? 1 : -1;

	const filteredCourses = courses.filter(course => {
		const matchesType = type === 'all' || course.courseType === type;
		const matchesSearch =
			course.fullname.toLowerCase().includes(searchLower) || course.summary.includes(searchLower);
		return matchesType && matchesSearch;
	});

	filteredCourses.sort((a, b) => {
		if (a.timecreated < b.timecreated) return sortOrder;
		if (a.timecreated > b.timecreated) return -sortOrder;
		return 0;
	});

	return filteredCourses;
};

export { drawFilters, filterCourses };
