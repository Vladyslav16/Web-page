// Отримуємо посилання на кнопку "Зміст [close]"
const menuToggle = document.querySelector(".menu-toggle");
const menuList = document.querySelector("#menu-list");

// Встановлюємо початковий стан відкритості меню
let isMenuOpen = false;

// Функція, яка відкриває або закриває список
function toggleMenu() {
    if (isMenuOpen) {
        menuList.style.display = "none";
        isMenuOpen = false;
        menuToggle.innerHTML = "Зміст <button id='menu-button'>[open]</button>";
    } else {
        menuList.style.display = "block";
        isMenuOpen = true;
        menuToggle.innerHTML = "Зміст <button id='menu-button'>[close]</button>";
    }
}

// Додаємо обробник події на кнопку
menuToggle.addEventListener("click", toggleMenu);
