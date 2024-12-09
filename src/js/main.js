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

document.querySelector('#burger-btn-open').addEventListener('click', () => {
    document.querySelector('#burger-menu').classList.remove('hidden');
})

document.querySelector('#burger-btn-close').addEventListener('click', () => {
    document.querySelector('#burger-menu').classList.add('hidden');
})

const burgerMenuLinks = document.querySelectorAll('.burger-menu-link');

burgerMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('#burger-menu').classList.add('hidden');
    });
})

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const thumbnails = Array.from(document.querySelectorAll('.thumbnail'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => showSlide(index));
});

// Функция для показа предыдущего слайда
function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

// Функция для показа конкретного слайда по индексу
function showSlide(index) {
    slideIndex = index;
    updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
    
    // Обновление миниатюр
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.classList.toggle('active', index === slideIndex);
    });
}

// Инициализация слайдера
updateSlider();
