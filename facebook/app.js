const email = document.getElementById('email');
const pass = document.getElementById('pass');
const submit = document.getElementById('button');

const emailValidate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.match(emailRegex)) {
        email.style.borderColor = 'green'
        return true
    }
    else {
        email.style.borderColor = 'red'
        return false
    }
}

const passValidate = () => {
    const passRegex = /^.{5,}$/;
    
    if (pass.value.match(passRegex)) {
        pass.style.borderColor = 'green';
        return true
    } else {
        pass.style.borderColor = 'red'
        return false
    }
}

function nextPage() {
    if (emailValidate() && passValidate()) {
        window.location.href = 'landing.html'
        return true
    } else {
        window.location.href = '#'
        return false
    }
}

submit.addEventListener('click', () => {

    const storedEmail = localStorage.getItem("Email");
    const storedPass = localStorage.getItem("Password");

    if (email.value === storedEmail && pass.value === storedPass) {
        emailValidate();
        passValidate();
        nextPage();
        email.value = '';
        pass.value = '';
    }
    else if (email.value === '' && pass.value === '') {
        alert('შეიყვანეთ ინფორმაცია!!!')
    }
    else {
        alert('შეყვანილი ინფორმაციით რეგისტრირებული მომხარებელი არ მოიძებნა!!!')
    }
})

const btn = document.querySelector('.secondBtn')

btn.addEventListener('click', () => {
    window.location.href = 'register.html'
})

