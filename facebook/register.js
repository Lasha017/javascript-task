const em = document.getElementById('email')
const password = document.getElementById('pass');
const repass = document.getElementById('rePass');
const register = document.querySelector('.secondBtn')

const emVal = () => {
    const emRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (em.value.match(emRegex)) {
        em.style.borderColor = 'green'
        return true
    }
    else {
        em.style.borderColor = 'red'
        return false
    }
}

const passwordValidate = () => {
    const passwordRegex = /^.{5,}$/;
    
    if (password.value.match(passwordRegex)) {
        password.style.borderColor = 'green';
        return true
    } else {
        password.style.borderColor = 'red'
        return false
    }
}

const rePass = () => {
    const passwordRegex = /^.{5,}$/;
    
    if (repass.value.match(passwordRegex) && repass.value.match(pass)) {
        repass.style.borderColor = 'green';
        return true
    } else {
        repass.style.borderColor = 'red'
        return false
    }
}

register.addEventListener('click', () => {
    if (emVal() && passwordValidate() && rePass()) {
        window.location.href = 'index.html'
        localStorage.setItem("Email", em.value)
        localStorage.setItem("Password", password.value)
    }
})



