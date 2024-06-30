import { extractContent, extractPhoto } from '../../_utils';
import { ICourse } from '../../interfaces';

interface ITestimonial {
	name: string;
	photo: string | undefined;
	text: string;
}

const testimonialsHtml = (testimonials: ITestimonial[]) => {
	if (testimonials.length === 0) return '';

	let html = '';

	testimonials.forEach(testimonial => {
		html += `
					<div class="testimonial">
						<figure class="testimonial-photo">
							<img title="${testimonial.name.replace(/&nbsp;/g, '')}" src="${
								testimonial.photo ? testimonial.photo : './avatar.svg'
							}" alt="${testimonial.name}" />
							<figcaption>${testimonial.name}</figcaption>
						</figure>
						<div class="testimonial-text">
							<p>${testimonial.text}</p>
						</div>
						<div class="testimonial-quote">
						<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 349.078 349.078"> <
						<path d="M198.779 322.441v-58.245c0-7.903 6.406-14.304 14.304-14.304 28.183 0 43.515-28.904 45.643-85.961h-45.643c-7.897 0-14.304-6.41-14.304-14.304V26.64c0-7.9 6.406-14.301 14.304-14.301h121.69c7.896 0 14.305 6.408 14.305 14.301v122.988c0 27.349-2.761 52.446-8.181 74.611-5.568 22.722-14.115 42.587-25.398 59.049-11.604 16.917-26.132 30.192-43.155 39.437-17.152 9.304-37.09 14.026-59.267 14.026-7.891-.006-14.298-6.413-14.298-14.31zM14.301 249.887C6.404 249.887 0 256.293 0 264.185v58.257c0 7.896 6.404 14.298 14.301 14.298 22.166 0 42.114-4.723 59.255-14.026 17.032-9.244 31.558-22.508 43.161-39.437 11.29-16.462 19.836-36.328 25.404-59.061 5.423-22.165 8.178-47.263 8.178-74.6V26.628c0-7.9-6.41-14.301-14.304-14.301H14.301C6.404 12.327 0 18.734 0 26.628v122.988c0 7.899 6.404 14.304 14.301 14.304h45.002c-2.102 57.062-17.213 85.967-45.002 85.967z"/>
						</svg>
						</div>
					</div>		
		`;
	});

	return html;
};

const getTestimonials = (course: ICourse): ITestimonial[] => {
	const testimonials: ITestimonial[] = [];

	for (let i = 1; i <= 3; i++) {
		if (course.customfields.find(field => field.shortname === `feedbackfio${i}kurs`)?.value) {
			testimonials.push({
				name: extractContent(
					course.customfields.find(field => field.shortname === `feedbackfio${i}kurs`)?.value ?? ''
				),
				photo: extractPhoto(
					course.customfields.find(field => field.shortname === `feedbackfoto${i}kurs`)?.value ?? ''
				),
				text: extractContent(
					course.customfields.find(field => field.shortname === `feedback${i}kurs`)?.value ?? ''
				),
			});
		}
	}
	return testimonials;
};

const drawTestimonials = (course: ICourse) => {
	const testimonials: ITestimonial[] = getTestimonials(course);

	if (!testimonials || testimonials.length === 0) return '';

	return `
    	<div class="course-testimonials-wrapper">
            ${testimonialsHtml(testimonials)}
        </div>
	`;
};

export { drawTestimonials };
