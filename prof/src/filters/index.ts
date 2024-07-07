import { drawCategoryFilter } from './filter/category';
import { drawSearchFilter } from './filter/search';
import { drawTagFilter } from './filter/tag';
import { drawSortFilter } from './filter/sort';
import { drawResetFilters } from './filter/_reset';
import { ICourse } from '../interfaces';

const drawFilters = (courses: ICourse[]) => {
	drawCategoryFilter();
	drawTagFilter(courses);
	drawSearchFilter();
	drawSortFilter();
	drawResetFilters();
};

export { drawFilters };
