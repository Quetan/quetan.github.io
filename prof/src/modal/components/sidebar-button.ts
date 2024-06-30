import { ICourse } from '../../interfaces';

const drawSidebarButton = (course: ICourse) => {
	return `
    <a 
        href="https://edu2pro.ru/portal/course/view.php?id=${course.id}"
        class="button button-md"
    >
        Записаться на курс
    </a>
    `;
};

export { drawSidebarButton };
