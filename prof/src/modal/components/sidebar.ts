import { extractContent, extractSelectedTagNames } from '../../_utils';
import { ICourse } from '../../interfaces';
import { drawAuthors } from './authors';
import { drawBadge } from './badge';
import { drawSidebarButton } from './sidebar-button';
import { drawSidebarClose } from './sidebar-close';
import { drawSidebarDesc } from './sidebar-desc';
import { drawSidebarShare } from './sidebar-share';

const drawSidebar = (course: ICourse) => {
	const { customfields } = course;

	const duration = extractContent(
		customfields.find(field => field.shortname === 'durationkurs')?.value ?? ''
	);
	const docend = extractContent(
		customfields.find(field => field.shortname === 'docend')?.value ?? ''
	);
	const foruser = extractContent(
		customfields.find(field => field.shortname === 'foruser')?.value ?? ''
	);

	const tags = extractSelectedTagNames(course);

	return `
    <div class="sidebar">
		${drawSidebarButton(course)}

		${drawAuthors(course)}

		<div class="badge-wrapper">
			${drawBadge('Теги', tags.join(', '), 'tag')}
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
