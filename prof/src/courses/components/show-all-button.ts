import { Category } from '../../interfaces';

const drawShowAllButton = (courseType: Category) => {
	return `
    <a href="/courses.html?type=${courseType}" style="grid-column: 1 / 4;" class="button button-md mx-auto mt-8 block ">
        Смотреть все
    </a>
    `;
};

export { drawShowAllButton };
