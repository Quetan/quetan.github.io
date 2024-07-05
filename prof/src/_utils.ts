import { _MOODLE_TOKEN } from './api';

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

const getPhotoByRawUrl = (rawUrl: string | undefined): string => {
	if (!rawUrl) return './avatar.svg';
	const filePath = new URL(rawUrl).pathname.split('pluginfile.php/')[1];
	const url = new URL(`https://edu2pro.ru/portal/webservice/pluginfile.php/${filePath}`);
	url.searchParams.append('token', _MOODLE_TOKEN);
	return url.toString();
};

const extractPhoto = (s: string) => {
	const rawUrl = s.match(/src="(.*?)"/)?.[1];
	return getPhotoByRawUrl(rawUrl);
};

export { createSummary, extractContent, extractPhoto, getPhotoByRawUrl };
