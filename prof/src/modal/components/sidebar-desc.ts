import { ICourse } from '../../interfaces';

const drawSidebarDesc = (course: ICourse) => {
	const { timemodified, customfields } = course;
	const changedate = new Date(timemodified * 1000).toLocaleDateString();
	const shortdesc = customfields.find(field => field.shortname === 'shortdesc')?.value ?? '';
	return `
    <div class="about">
        <p style="font-weight: 500;">Кратко о курсе</p>
        <div class="about-text">
            ${shortdesc}
        </div>
        <p class="about-timemodified">
            <i>
                Последнее изменение: ${changedate}
            </i>
        </p>
    </div>
    `;
};

export { drawSidebarDesc };
