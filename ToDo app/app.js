const button = document.querySelector('.btn')

button.addEventListener('click', () => {
    const card = document.querySelector('.card')
    card.style.backgroundImage = 'url("./bitmap(1)")';
})

const input = document.querySelector('.input')

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter" && input.value !== '') {
        const li = document.createElement('li')
        const ul = document.querySelector('ul')
        const check = document.createElement('input')

        let val = input.value;
        li.innerHTML = `<div id = "left-list-fix"><input type="checkbox" id="list-input"> ${val}</div>
         <button id ="list-btn">x</button>`

        ul.appendChild(li);
        input.value = '';

    }
    
})

const listBtn = document.getElementById('list-btn');

listBtn.addEventListener('click', () => {
    // let li = document.querySelector('li')
    // let ul = document.querySelector('ul')x
    ul.removeChild(li);
})




