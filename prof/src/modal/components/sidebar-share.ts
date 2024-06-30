import { createSummary } from '../../_utils';
import { ICourse } from '../../interfaces';

const drawSidebarShare = (course: ICourse) => {
	return `
    <div class="share">
        <h2 class="">Расскажите о курсе друзьям</h2>
        <div>
            <div
                class="ya-share2"
                data-curtain
                data-size="l"
                data-limit="7"
                data-direction="horizontal"
                data-url="https://edu2pro.ru/portal/course/view.php?id=${course.id}"
                data-title="${course.fullname}"
                data-description="${createSummary(course.summary)}"
                data-services="messenger,vkontakte,odnoklassniki,telegram,whatsapp,moimir,viber,twitter"></div>
        </div>
    </div>
    `;
};

export { drawSidebarShare };
