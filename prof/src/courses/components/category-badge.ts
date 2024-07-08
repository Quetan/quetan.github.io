const drawCategoryBadge = (categoryId: number | string, categoryName: string) => {
	return `
    <p class="course-start">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-tag">
            <path
                d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
            <path d="M7 7h.01" />
        </svg>
        Категория:
        <a href="https://edu2pro.ru/portal/course/index.php?categoryid=${categoryId}" target="_blank">${categoryName}</a>
    </p>
`;
};

export { drawCategoryBadge };
