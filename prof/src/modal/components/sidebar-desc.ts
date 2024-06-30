import { ICourse } from '../../interfaces';

const drawSidebarDesc = (course: ICourse) => {
	const shortdesc = course.customfields.find(field => field.shortname === 'shortdesc')?.value ?? '';
	return `
    <div class="about">
        <p style="font-weight: 500;">Информация о курсе</p>
        <div style="margin-bottom: 1.5rem; margin-top: 1.5rem;">
        ${shortdesc}
        </div>
        <a href="https://edu2pro.ru/portal/course/view.php?id=${course.id}" 
        style="display: block; margin-bottom: 0.5rem; margin-top: 1.5rem; color: #0077ff;" >
            Программа курса
        </a>
        <p>
            <i>
            Последнее изменение: ${new Date(course.timemodified * 1000).toLocaleDateString()}
            </i>
        </p>
    </div>
    `;
};

export { drawSidebarDesc };
