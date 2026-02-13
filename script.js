// 1) Put your photos in /photos and list them here:
const photos = [
  "photos/photo1.jpeg",
  "photos/photo2.jpeg",
  "photos/photo3.jpeg",
  "photos/photo4.jpeg",
  "photos/photo5.jpeg"
];

// ===== SLIDER (only if slider elements exist) =====
const img = document.getElementById("slide");
const count = document.getElementById("count");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

if (img && count && prev && next) {
  let i = 0;

  function show() {
    img.src = photos[i];
    count.textContent = `${i + 1} / ${photos.length}`;
  }
  show();

  prev.addEventListener("click", () => {
    i = (i - 1 + photos.length) % photos.length;
    show();
  });

  next.addEventListener("click", () => {
    i = (i + 1) % photos.length;
    show();
  });

  // optional: swipe on mobile
  let startX = 0;
  img.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX));
  img.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) < 40) return;
    i = dx > 0 ? (i - 1 + photos.length) % photos.length : (i + 1) % photos.length;
    show();
  });
}

// ===== CONFETTI (safe to define once) =====
function confettiBurst() {
  for (let k = 0; k < 90; k++) {
    const c = document.createElement("span");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.animationDuration = (1.5 + Math.random() * 1.6) + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3200);
  }
}

// inject confetti css once
if (!document.getElementById("confetti-style")) {
  const style = document.createElement("style");
  style.id = "confetti-style";
  style.textContent = `
    .confetti{
      position:fixed;
      top:-12px;
      width:10px; height:14px;
      background:white;
      border-radius:2px;
      animation: fall linear forwards;
      opacity:.9;
      mix-blend-mode: screen;
    }
    @keyframes fall{
      to{ transform: translateY(110vh) rotate(720deg); opacity:0; }
    }
  `;
  document.head.appendChild(style);
}

// ===== BUTTONS (only if they exist on the page) =====
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const msg = document.getElementById("msg");

if (yesBtn && msg) {
  yesBtn.addEventListener("click", () => {
    msg.textContent = "YAY!! 💖 I love you so much. Valentine secured 🥰";
    confettiBurst();
  });
}