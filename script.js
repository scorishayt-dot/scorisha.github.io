const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.textContent = "☰";
}));

const levelDetails = {
  stereo: ["Stereo Madness", "Стартовый уровень Geometry Dash: ознакомление с первыми прыжками, шипами и платформами. Отличный способ освоить управление."],
  back: ["Back on Track", "Следующий официальный уровень. Здесь важно сохранять темп и внимательнее рассчитывать прыжки, но, как бы странно то ни было, он считается более лёгким, чем Stereo Madness."],
  polar: ["Polargeist", "Уровень добавляет новые игровые элементы и помогает привыкнуть к более сложным препятствиям."],
  dry: ["Dry Out", "Испытание на реакцию и память. Если перевернулся экран - так надо."]
};
const modal = document.querySelector("#levelModal");
const modalTitle = document.querySelector("#modalTitle");
const modalText = document.querySelector("#modalText");
document.querySelectorAll(".level-card").forEach(card => {
  card.addEventListener("click", () => {
    const details = levelDetails[card.dataset.level];
    modalTitle.textContent = details[0];
    modalText.textContent = details[1];
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal-close").focus();
  });
});
function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}
modal.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !modal.hidden) closeModal();
});

const form = document.querySelector("#contactForm");
const status = document.querySelector("#formStatus");
form.addEventListener("submit", event => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const data = new FormData(form);
  status.textContent = `Спасибо! Твой выбор - ${data.get("level")}. Твоё сообщение будет обязательно доставлено нам!`;
  form.reset();
});
