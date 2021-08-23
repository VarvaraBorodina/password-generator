const generatebutton = document.getElementById("passwordButton");
const $password = document.getElementById("password");

generatebutton.addEventListener('click', () => {
    let numbers = [];
    for(let i = 0; i < 10; i++) {
         numbers.push(Math.round((Math.random() * 16)).toString(16));
        }
        $password.textContent = numbers.join("");
});


