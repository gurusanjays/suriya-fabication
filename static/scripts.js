// --------- FORM VALIDATION ---------
const form = document.querySelector('.inputbox form') || document.querySelector('form');
const inputsumbit = document.getElementById('inputsumbit');

if (form && inputsumbit) {
    form.addEventListener('submit', (event) => {
        const inputname = document.getElementById('inputname').value.trim();
        const inputemail = document.getElementById('inputemail').value.trim();
        const inputphone = document.getElementById('inputphone').value.trim();
        const inputservice = document.getElementById('inputservice').value;
        const inputproject = document.getElementById('inputproject').value.trim();

        // Validate the input fields
        if (!inputname || !inputemail || !inputphone || !inputservice || !inputproject) {
            event.preventDefault();
            alert('Please fill in all required fields.');
            return;
        }
        if (!/^[a-zA-Z\s]+$/.test(inputname)) {
            event.preventDefault();
            alert('Please enter a valid name (letters and spaces only).');
            return;
        }
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(inputemail)) {
            event.preventDefault();
            alert('Please enter a valid email address.');
            return;
        }
        if (!/^\d{10}$/.test(inputphone)) {
            event.preventDefault();
            alert('Please enter a valid phone number (10 digits).');
            return;
        }
        if (inputservice === '') {
            event.preventDefault();
            alert('Please select a service.');
            return;
        }
        if (inputproject === '') {
            event.preventDefault();
            alert('Please provide project details.');
            return;
        }
        // If all validation passes, form submits normally
    });
}

// --------- HERO IMAGE SLIDER ---------
const box1 = document.querySelector('.box1');
const btns = document.querySelectorAll('.btn');
const imgList = ["1", "2", "3", "4"];
let index = 0;

btns.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('btn-left')) {
            index = (index - 1 + imgList.length) % imgList.length;
        } else {
            index = (index + 1) % imgList.length;
        }
        // Use Flask static path for images
        box1.style.background = `url("/static/${imgList[index]}.jpg") center/cover fixed no-repeat`;
        box1.style.transition = "background 0.5s";
        box1.style.backgroundSize = "cover";
    });
});

// --------- NAVIGATION SCROLL & HIGHLIGHT ---------
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.na li a');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - nav.offsetHeight,
                behavior: 'smooth'
            });
        }
    });
});

// --------- UNIQUE: INPUT FIELD HIGHLIGHT ON ERROR ---------
const inputFields = document.querySelectorAll('.inputbox input, .inputbox select, .inputbox textarea');
inputFields.forEach(field => {
    field.addEventListener('input', () => {
        if (field.value.trim() === '') {
            field.style.borderColor = '#ed8936';
            field.style.boxShadow = '0 0 5px #ed8936';
        } else {
            field.style.borderColor = '';
            field.style.boxShadow = '';
        }
    });
});