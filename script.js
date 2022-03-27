const tabsButton = document.querySelectorAll("[data-target-tab]");

tabsButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabsButton.forEach((btn) => btn.classList.remove("active"));

    const items = document.querySelectorAll(".product__detail--tabsContent");

    items.forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
    document.querySelector(btn.dataset.targetTab).classList.add("active");
  });
});
