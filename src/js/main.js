function accordion() {
    const accordionBtns = document.querySelectorAll('.accordion-trigger');

    accordionBtns.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentNode;

            if (parent.classList.contains('active')) {
                parent.classList.remove('active');
            } else {
                parent.classList.add('active');
            }

            const accordionContent = parent.querySelector('.accordion-content');
            accordionContent.classList.toggle('hidden');
        });
    });
}


function updateTriggerText(button) {
    const triggerInput = button.closest('.accordion-item').querySelector('#accordion-trigger-text');
    triggerInput.value = button.textContent;

    const parentWithActive = triggerInput.closest('.active')
    parentWithActive.classList.remove('active')

    const parentWithoutHidden = triggerInput.parentNode.nextElementSibling;
    parentWithoutHidden.classList.add('hidden')
}

accordion();
function handleFormSubmit(form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        for (let [key, value] of formData) {
            console.log(`${key} — ${value}`);
        }
        // const resp = await axios.post('URL_СЕРВЕРА', formData);
        // console.log(resp);
    });
}

const form1 = document.querySelector('#service-form');
const form2 = document.querySelector('#contacts-form');
const form3 = document.querySelector('#client-data-form');

handleFormSubmit(form1);
handleFormSubmit(form2);
handleFormSubmit(form3);

document.querySelector('#burger-menu').addEventListener('click', () => {
    document.querySelector('#burger-menu').classList.toggle('hidden');
})