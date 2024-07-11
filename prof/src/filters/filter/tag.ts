import { Tag } from '../../interfaces';
import { setFilterState } from '../state';
import { params } from '../URLSearchParams';
import { tagFilter } from './_nodes';

const tagNameByValue: Record<Tag, string> = {
	all: 'Все',
	tag_2023: '2023',
	tag_2024: '2024',
	tag_chairman_assist: 'В помощь председателю',
	tag_personal_growth: 'Личный рост',
	tag_reports_and_elections: 'Отчеты и выборы',
	tag_ppo: 'ППО',
};

const drawTagFilter = () => {
	if (!tagFilter) return null;

	tagFilter.innerHTML = (Object.keys(tagNameByValue) as Array<keyof typeof tagNameByValue>)
		.map(tag => `<option value="${tag}">${tagNameByValue[tag]}</option>`)
		.join('');

	tagFilter.value = params.tag;

	tagFilter.addEventListener('change', (e: Event) => {
		const value: Tag = (e.target as HTMLSelectElement).value as Tag;
		setFilterState('tag', value);
	});
};

export { drawTagFilter };
