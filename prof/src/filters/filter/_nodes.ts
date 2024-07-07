const tagFilter: HTMLSelectElement | null = document.querySelector('#course-tags');
const categoryFilter: HTMLSelectElement | null = document.querySelector('#course-type');
const searchFilter: HTMLInputElement | null = document.querySelector('#course-search');
const sortFilter: HTMLSelectElement | null = document.querySelector('#course-sort');
const resetFilters: HTMLButtonElement | null = document.querySelector('#reset-filters');

export { tagFilter, categoryFilter, searchFilter, sortFilter, resetFilters };
