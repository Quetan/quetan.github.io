import { extractContent, extractPhoto, getPhotoByRawUrl } from '../../_utils';
import { ICourse } from '../../interfaces';

interface IAuthor {
	name: string;
	photo: string | undefined;
}

const getAuthors = (course: ICourse): IAuthor[] => {
	const authors: IAuthor[] = [];

	for (let i = 1; i <= 3; i++) {
		if (course.customfields.find(field => field.shortname === `autorfio${i}kurs`)?.value) {
			authors.push({
				name: extractContent(
					course.customfields.find(field => field.shortname === `autorfio${i}kurs`)?.value ?? ''
				),
				photo: extractPhoto(
					course.customfields.find(field => field.shortname === `autorfoto${i}kurs`)?.value ?? ''
				),
			});
		}
	}
	return authors;
};

const authorsHtml = (authors: IAuthor[]) => {
	let html = '';
	authors.forEach(
		author =>
			(html += `<img title="${author.name}" src="${getPhotoByRawUrl(author.photo)}" alt="${
				author.name
			}" />`)
	);
	return html;
};

const drawAuthors = (course: ICourse) => {
	const authors: IAuthor[] = getAuthors(course).filter(author => author.name);

	if (!authors || authors.length === 0)
		return `
			<div class="course-authors-wrapper">
					<p class="course-authors-title">Авторы курса:</p>
					<span style="color: #aaa; font-size: 14px;">Авторы не указаны</span>
			</div>
		`;

	return `
    	<div class="course-authors-wrapper">
            <p class="course-authors-title">Авторы курса:</p>
            <div class="course-authors">
            	${authorsHtml(authors)}
            </div>
        </div>
	`;
};

export { drawAuthors };
