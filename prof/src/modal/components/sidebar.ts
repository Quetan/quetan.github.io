import { extractContent } from '../../_utils';
import { ICourse } from '../../interfaces';
import { drawAuthors } from './authors';
import { drawBadge } from './badge';
import { drawSidebarButton } from './sidebar-button';
import { drawSidebarClose } from './sidebar-close';
import { drawSidebarDesc } from './sidebar-desc';
import { drawSidebarShare } from './sidebar-share';

const drawSidebar = (course: ICourse) => {
	const duration = extractContent(
		course.customfields.find(field => field.shortname === 'durationkurs')?.value ?? ''
	);
	const docend = extractContent(
		course.customfields.find(field => field.shortname === 'docend')?.value ?? ''
	);
	const foruser = extractContent(
		course.customfields.find(field => field.shortname === 'foruser')?.value ?? ''
	);

	return `
    <div class="sidebar">
		${drawSidebarButton(course)}

		${drawAuthors(course)}

		<div class="badge-wrapper">
			${drawBadge('Документ об окончании курса', docend, 'docend')}
			${drawBadge('Для кого', foruser, 'foruser')}
			${drawBadge('Продолжительность', duration, 'duration')}
		</div>

		${drawSidebarDesc(course)}
		${drawSidebarShare(course)}
		
		${drawSidebarButton(course)}
		${drawSidebarClose()}
	</div>
    `;
};

export { drawSidebar };
