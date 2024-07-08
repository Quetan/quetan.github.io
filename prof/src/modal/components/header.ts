import { ICourse } from '../../interfaces';
import { createSummary } from '../../_utils';
import * as api from '../../api';
import { drawStars } from './stars';
import { drawBadge } from './badge';

const drawImage = (img: string, alt: string) => {
	if (!img) return '';
	return `<img src="${img}?token=${api._MOODLE_TOKEN}" alt="${alt}" />`;
};

const drawCloseButton = () => {
	return `
        <button id="modal-close" aria-label="Закрыть модальное окно" >
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g stroke-linecap="round" stroke-linejoin="round"></g><g> <g clip-path="url(#clip0_429_11083)"> <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke="#fafafa"  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11083"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>
        </button>
    `;
};

const drawHeader = (course: ICourse) => {
	if (!course) return '';
	const img =
		course.overviewfiles.length !== 0 ? course.overviewfiles[0]?.fileurl : './placeholder.webp';
	const startdate = new Date(course.startdate * 1000).toLocaleDateString();

	return `
    	<header class="modal-header">
            ${drawCloseButton()}
            <div>
                <h1>${course.fullname}</h1>
                <p>
                    ${createSummary(course.summary)}
                </p>
                ${drawStars(course)}
            </div>
            <div class="flex flex-col gap-4">
                ${drawImage(img, course.shortname)}
                <!-- ${drawBadge('Дата начала', startdate, 'date')} -->
            </div>
        </header>
    `;
};

export { drawHeader };
