const drawOpenButton = (courseId: number) => {
	return `
    <button
        class="button button-sm ml-auto mt-auto block open-course"
        data-course="${courseId}"
        >Подробнее
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-right">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" /></svg>
    </button>
    `;
};

export { drawOpenButton };
