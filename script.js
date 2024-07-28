document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", function () {
      const isActive = question.classList.contains("active");

      faqItems.forEach((i) => {
        i.querySelector(".faq-question").classList.remove("active");
        i.querySelector(".faq-answer").style.maxHeight = "0";
        i.querySelector(".toggle-icon").src = "icons/icon-plus.svg";
      });

      if (!isActive) {
        question.classList.add("active");
        const answer = item.querySelector(".faq-answer");
        answer.style.maxHeight = answer.scrollHeight + "px";
        question.querySelector(".toggle-icon").src = "icons/icon-minus.svg";
      }
    });
  });
});
