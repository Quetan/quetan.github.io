const createSummary = (summary: string) => {
	if (!summary) return '';
	const summaryNode = document.createElement('p');
	summaryNode.classList.add('course-description');
	summaryNode.innerHTML = extractContent(summary);
	const images = summaryNode.querySelectorAll('p > img');
	images.forEach(image => image.remove());
	return summaryNode.innerHTML;
};

const extractContent = (s: string) => {
	const html = s.replace(/&nbsp;/g, '');
	var span = document.createElement('span');
	span.innerHTML = html;
	return span.textContent || span.innerText;
};

const extractPhoto = (s: string) => {
	var span = document.createElement('span');
	span.innerHTML = s;
	return span.querySelector('img')?.src;
};

export { createSummary, extractContent, extractPhoto };
