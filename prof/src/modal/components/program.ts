import { ICourse } from '../../interfaces';

const createDetails = (content: string) => {
	const wrapper = document.createElement('div');
	wrapper.innerHTML = content;

	const modules = wrapper.querySelectorAll('li:has(ul)');

	const modulesLists = [...modules.values()];

	const moduleNodes = modulesLists.map(module => {
		const moduleDetails = [...(module.querySelector('ul')?.querySelectorAll('li').values() ?? [])];
		module.querySelector('ul')?.remove();

		return `
            <details>
                <summary>${module.innerHTML.trim()}</summary>
                <ul>
                    ${moduleDetails.map(detail => `<li>${detail.innerHTML}</li>`).join('')}
                </ul>
            </details>
        `;
	});
	return `
    <div class="programs-wrapper">
        ${moduleNodes.join('')}
    </div>`;
};

const drawProgram = (course: ICourse) => {
	const program = course.customfields.find(field => field.shortname === 'program')?.value ?? '';
	return `
        <p><strong>Программа курса:</strong></p>
        ${createDetails(program)}
    `;
};

export { drawProgram };
