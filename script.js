// Lazy-load
const lazyEls = document.querySelectorAll(".lazy");

if ("IntersectionObserver" in window) {
  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;

        if (el.tagName === "IMG") {
          el.src = el.dataset.src;
        }

        if (el.tagName === "VIDEO") {
          const source = el.querySelector("source");
          if (source) {
            source.src = source.dataset.src;
            el.load();
          }
        }

        observer.unobserve(el);
      }
    });
  });

  lazyEls.forEach(el => obs.observe(el));
}

// Lightbox
const gallery = document.getElementById("gallery-grid");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("lightbox-close");

gallery.addEventListener("click", e => {
  if (e.target.tagName === "IMG") {
    lightboxImg.src = e.target.src || e.target.dataset.src;
    lightbox.classList.add("show");
  }
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("show");
});

// Formulário
const form = document.getElementById("contact-form");
const msg = document.getElementById("form-msg");

form.addEventListener("submit", e => {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!nome || !email) {
    msg.textContent = "Preencha todos os campos.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Enviado com sucesso!";
  msg.style.color = "green";
  form.reset();
});

// Menu mobile
document.querySelector(".nav-toggle").onclick = () => {
  document.querySelector(".main-nav").classList.toggle("open");
};

// Ano no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// POP-UP DE MATRÍCULAS
const popup = document.getElementById("popup-overlay");
const popupClose = document.getElementById("popup-close");

// Mostra o pop-up após 1 segundo
setTimeout(() => {
  popup.classList.add("show");
}, 1000);

// Botão de fechar
popupClose.addEventListener("click", () => {
  popup.classList.remove("show");
});

// Fechar clicando fora da caixa
popup.addEventListener("click", (e) => {
  if (e.target === popup) popup.classList.remove("show");
});
