const email = document.getElementById('email')

email.addEventListener("input", (e) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const currentVal = e.target.value;
    const valid = emailRegex.test(currentVal)

    document.getElementById('email_error').style.display = valid ? "none" : "block";
    e.target.style.border = valid ? "none" : "1px solid red";
})

const pass = document.getElementById('pass')

pass.addEventListener("input", (e) => {
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const currentValue = e.target.value
    const val = passRegex.test(currentValue)
    
    document.getElementById('pass_error').style.display = val ? "none" : "block";
    e.target.style.border = val ? "none" : "1px solid red";
})