interface CourseCardComponents {
	courseImage: string;
	name: string;
	description: string;
	openButton: string;
	badges?: string;
	authors?: string;
}

function drawCourseCard(components: CourseCardComponents) {
	const { courseImage, name, badges, description, openButton, authors } = components;
	return `
        <article class="course-card group-card">
            <header class="course-header">${courseImage}</header>
            <main class="course-content">
                <h1 class="course-title">${name}</h1>
                <div class="course-topline">
                    ${badges ?? ''}
                </div>
                <p class="course-description">
                    ${description}
                </p>
                ${authors ?? ''}
                ${openButton}
            </main>
        </article>
    `;
}

export { type CourseCardComponents, drawCourseCard };
