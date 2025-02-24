toastEl = document.querySelector(".toast");
msgEl = document.getElementById("msg");

const TEXTS = [
  "اینترنت شما دارد چای دم می‌کند، صبور باشید.",
  "در حال شناسایی مودم، لطفاً مودم را به دکتر معرفی کنید.",
  " ما هم رفتیم. شما چرا هنوز اینجایید؟",
  "اینترنت شما هنوز خواب است لطفا آن را بیدار کنید",
  "مودم شما دارد با کابل‌ها دعوا می‌کند"
];

function Show_Toast() {
  toastEl.style.display = "flex";
  msg.innerHTML = TEXTS[Math.floor(Math.random() * TEXTS.length)];
  setTimeout(hide_Toast, 10000);
}
function hide_Toast() {
  toastEl.style.display = "none";
}

document.querySelector(".close").addEventListener("click", function (event) {
  hide_Toast();
});

setInterval(Show_Toast, 15000);
