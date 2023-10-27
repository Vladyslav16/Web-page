// Отримуємо посилання на елементи форми та список відгуків
const writeReviewButton = document.getElementById("write-review-button");
const reviewForm = document.getElementById("review-form");
const nameInput = document.getElementById("name-input");
const commentInput = document.getElementById("comment-input");
const submitReviewButton = document.getElementById("submit-review-button");
const reviewList = document.getElementById("review-list");

// Додаємо обробник події на кнопку "Написати відгук"
writeReviewButton.addEventListener("click", () => {
    reviewForm.style.display = "block";
});

// Додаємо обробник події на кнопку "Відправити"
submitReviewButton.addEventListener("click", () => {
    const name = nameInput.value;
    const comment = commentInput.value;

    // Перевірка на пусті поля
    if (name.trim() === "" || comment.trim() === "") {
        alert("Будь ласка, введіть ваше ім'я та коментар.");
        return;
    }

    // Додаємо коментар до списку
    const reviewElement = document.createElement("div");
    reviewElement.innerHTML = `<p><strong>${name}:</strong> ${comment}</p>`;
    reviewList.appendChild(reviewElement);

    // Очищаємо поля вводу
    nameInput.value = "";
    commentInput.value = "";

    // Сховати форму
    reviewForm.style.display = "none";
});
