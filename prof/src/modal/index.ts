import { ICourse } from '../interfaces';
import { MODAL_WRAPPER } from '../nodes';
import { drawContent } from './components/content';
import { drawSidebar } from './components/sidebar';
import { drawHeader } from './components/header';

const drawModal = (course: ICourse) => {
	if (!MODAL_WRAPPER) return null;
	MODAL_WRAPPER.innerHTML = createModal(course);
};

const closeModal = () => {
	if (!MODAL_WRAPPER) return null;
	MODAL_WRAPPER.close();
};

const handleModal = (courses: ICourse[]) => {
	if (!MODAL_WRAPPER) return null;

	const MODAL_BUTTONS: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.open-course');
	MODAL_BUTTONS.forEach(button => {
		const courseId: number = Number.parseInt(button.dataset.course ?? '', 10);
		const course = courses.find((c: ICourse) => c.id === courseId);

		if (!course) return null;

		button.addEventListener('click', () => {
			drawModal(course);
			if (!MODAL_WRAPPER) return null;
			const share = MODAL_WRAPPER.querySelector('.ya-share2');
			//@ts-expect-error
			Ya.share2(share);

			const MODAL_CLOSE = MODAL_WRAPPER.querySelector('#modal-close');
			if (MODAL_CLOSE) {
				MODAL_CLOSE?.addEventListener('click', closeModal);
			}

			const MODAL_SIDEBAR_CLOSE = MODAL_WRAPPER.querySelector('#modal-sidebar-close');
			if (MODAL_SIDEBAR_CLOSE) {
				MODAL_SIDEBAR_CLOSE?.addEventListener('click', closeModal);
			}

			MODAL_WRAPPER?.showModal();
		});
	});
};

const createModal = (course: ICourse) => {
	if (!course) return '';

	return `
			<div class="modal-wrapper">
				${drawHeader(course)}
				<main class="modal-main">
					${drawContent(course)}
					${drawSidebar(course)}
				</main>
			</div>
	`;
};

export { createModal, drawModal, closeModal, handleModal };
