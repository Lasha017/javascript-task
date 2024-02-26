// const button = document.querySelector(".btn");

//   button.addEventListener("click", () => {
//      document.body.classList.toggle(" dark-mode")
      
//     if (document.body.classList.contains('dark-mode')) {
//       card.style.backgroundImage = 'url("./bitmap(1).svg")';
//     } else {
//       card.style.backgroundImage = 'url("./bitmap.svg")';
//     }
//     });

// const input = document.querySelector(".input");

// input.addEventListener("keypress", (event) => {
//   if (event.key === "Enter" && input.value !== "") {
//     const li = document.createElement("li");
//     const ul = document.querySelector("ul");
//     const check = document.createElement("input");

//     let val = input.value;
//     li.innerHTML = `<div id = "left-list-fix"><input type="checkbox" id="list-input"> ${val}</div>
//          <button id ="list-btn">x</button>`;

//     ul.appendChild(li);
//     input.value = "";

//     const checkboxes = document.querySelectorAll("#list-input");
//     checkboxes.forEach((checkbox) => {
//       checkbox.addEventListener("change", () => {
//         const li = checkbox.closest("li");
//         if (checkbox.checked) {
//           li.style.textDecoration = "line-through";
//         } else {
//           li.style.textDecoration = "";
//         }
//       });
//     });
//   }
// });



const button = document.querySelector(".btn");
const card = document.querySelector('.card'); 

button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains('dark-mode')) {
        card.style.backgroundImage = 'url("./bitmap(1).svg")';
    } else {
        card.style.backgroundImage = 'url("./bitmap.svg")';
    }
});

const input = document.querySelector(".input");

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter" && input.value !== "") {
        const li = document.createElement("li");
        const ul = document.querySelector("ul");
        const check = document.createElement("input");

        let val = input.value;
        li.innerHTML = `<div id="left-list-fix"><input type="checkbox" class="list-input"> ${val}</div>
             <button class="list-btn">x</button>`;

        ul.appendChild(li);
        input.value = "";

        const checkboxes = document.querySelectorAll(".list-input");
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener("change", () => {
                const li = checkbox.closest("li");
                if (checkbox.checked) {
                    li.style.textDecoration = "line-through";
                } else {
                    li.style.textDecoration = "";
                }
            });
        });
    }
});
