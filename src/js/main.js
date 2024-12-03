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

const form = document.querySelector('#submit-with-service');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form)
    for (let [key, value] of formData) {
        console.log(`${key} — ${value}`)
      }
    // const resp = await axios.post('', formData);
    // console.log(resp)
})