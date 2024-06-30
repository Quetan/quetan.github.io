// const TABS_CONTAINER = document.querySelector('#_courses');
// const LINKS_CONTAINER = document.querySelector('#_courses_links');

// const PRIM_TABS: NodeListOf<HTMLDivElement> = document.querySelectorAll('[data-category]');
// const PRIM_ALL: HTMLButtonElement | null = document.querySelector('#PRIM_ALL');
// const PRIM_IND: HTMLButtonElement | null = document.querySelector('#PRIM_IND');
// const PRIM_GROUP: HTMLButtonElement | null = document.querySelector('#PRIM_GROUP');
// const PRIM_SEMINAR: HTMLButtonElement | null = document.querySelector('#PRIM_SEMINAR');
// const PRIM_MEDIA: HTMLButtonElement | null = document.querySelector('#PRIM_MEDIA');

// type Category = 'all' | 'ind' | 'group' | 'seminar' | 'media';

// const queryString = window.location.search;
// const params = new URLSearchParams(queryString);
// const paramsCategory: Category | null = params.get('category') as Category;
// if (paramsCategory) switchTabs(paramsCategory);

// function showAllTabs() {
// 	PRIM_TABS.forEach((tab: HTMLDivElement) => {
// 		params.set('category', 'all');
// 		tab.classList.remove('hide');
// 		tab.classList.add('show');
// 	});
// }

// function switchTabs(category: Category) {
// 	params.set('category', category);
// 	PRIM_TABS.forEach((tab: HTMLDivElement) => {
// 		tab.classList.remove('show');
// 		tab.classList.remove('hide');
// 		tab.dataset.category === category ? tab.classList.add('show') : tab.classList.add('hide');
// 	});
// }
// PRIM_ALL?.addEventListener('click', showAllTabs);
// PRIM_IND?.addEventListener('click', () => switchTabs('ind'));
// PRIM_GROUP?.addEventListener('click', () => switchTabs('group'));
// PRIM_SEMINAR?.addEventListener('click', () => switchTabs('seminar'));
// PRIM_MEDIA?.addEventListener('click', () => switchTabs('media'));

// function createCourse(course: Course) {
// 	if (course.overviewfiles.length === 0) return;
// 	return `
//   <a href="${_MOODLE_BASE_URL}/course/view.php?id=${
// 		course.id
// 	}" target="_blank" class="courses-item">
//     <figure>
//       <img src="${course.overviewfiles[0]?.fileurl}?token=${api._MOODLE_TOKEN}" alt="${
// 				course.fullname
// 			}" />
//       <figcaption>
//         <span class="courses-title">${course.fullname}</span>
//         ${course.summary ? `<span class="courses-description">${course.summary}</span>` : ''}
//       </figcaption>
//     </figure>
//   </a>
//   `;
// }

// function createCourseLinks(course: Course) {
// 	if (course.overviewfiles.length === 0) return;
// 	return `
//   <a href="${_MOODLE_BASE_URL}/course/view.php?id=${course.id}" target="_blank" class="courses-link">${course.fullname}</a> |
//   `;
// }

// function generateCoursesTabs(courses: Course[]) {
// 	if (!courses) return;
// 	return courses.map(course => {
// 		return createCourse(course);
// 	});
// }
// function generateCoursesLinks(courses: Course[]) {
// 	if (!courses) return;
// 	return courses.map(course => {
// 		return createCourseLinks(course);
// 	});
// }

// async function initCourses() {
// 	if (!LINKS_CONTAINER || !TABS_CONTAINER) return null;

// 	const courses = await getCourses();

// 	const COURSE_TABS_NODES = generateCoursesTabs(courses);
// 	const COURSES_LINKS_NODES = generateCoursesLinks(courses);

// 	COURSE_TABS_NODES?.forEach(course => {
// 		if (!course) return;
// 		TABS_CONTAINER!.innerHTML += course;
// 	});
// 	COURSES_LINKS_NODES?.forEach(course => {
// 		if (!course) return;
// 		LINKS_CONTAINER!.innerHTML += course;
// 	});
// }
