toastEl = document.querySelector(".toast");
msgEl = document.getElementById("msg");

const TEXTS = [
  "یک شغل واقعی پیدا کنید",
  " ما هم رفتیم. شما چرا هنوز اینجایید؟",
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
