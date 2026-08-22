/**
 * INTERACTIVIDAD — STARTER PROJECT ELEVENTY (11ty)
 * Soporte de Temas (Dark/Light), Buscador en vivo, Filtros y Feedback
 */

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initReadingProgressBar();
  initBlogFilter();
  initContactForm();
});

/* --------------------------------------------------------------------------
   1. GESTOR DE TEMA (DARK / LIGHT MODE)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  if (!themeToggleBtn) return;

  const currentTheme = localStorage.getItem("theme") || 
    (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(themeToggleBtn, currentTheme);

  themeToggleBtn.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = activeTheme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(themeToggleBtn, newTheme);
  });
}

function updateThemeIcon(btn, theme) {
  if (theme === "light") {
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
    btn.setAttribute("title", "Cambiar a modo oscuro");
  } else {
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
    btn.setAttribute("title", "Cambiar a modo claro");
  }
}

/* --------------------------------------------------------------------------
   2. BARRA DE PROGRESO DE LECTURA (PARA ARTÍCULOS)
   -------------------------------------------------------------------------- */
function initReadingProgressBar() {
  const progressBar = document.getElementById("reading-progress");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const progress = (window.scrollY / totalHeight) * 100;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  });
}

/* --------------------------------------------------------------------------
   3. BUSCADOR Y FILTROS EN VIVO (BLOG)
   -------------------------------------------------------------------------- */
function initBlogFilter() {
  const searchInput = document.getElementById("blog-search");
  const catButtons = document.querySelectorAll(".cat-btn");
  const postCards = document.querySelectorAll(".post-card-item");
  const noResultsMsg = document.getElementById("no-results");

  if (!searchInput && catButtons.length === 0) return;

  let currentCategory = "all";
  let searchQuery = "";

  function filterPosts() {
    let visibleCount = 0;

    postCards.forEach(card => {
      const title = (card.getAttribute("data-title") || "").toLowerCase();
      const desc = (card.getAttribute("data-desc") || "").toLowerCase();
      const category = (card.getAttribute("data-category") || "").toLowerCase();

      const matchesSearch = title.includes(searchQuery) || desc.includes(searchQuery);
      const matchesCategory = currentCategory === "all" || category === currentCategory;

      if (matchesSearch && matchesCategory) {
        card.style.display = "flex";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    if (noResultsMsg) {
      noResultsMsg.style.display = visibleCount === 0 ? "block" : "none";
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      filterPosts();
    });
  }

  catButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      catButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category") || "all";
      filterPosts();
    });
  });
}

/* --------------------------------------------------------------------------
   4. FORMULARIO DE CONTACTO INTERACTIVO CON TOAST
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const toast = document.getElementById("toast-notification");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type='submit']");
    const originalText = btn.innerHTML;

    btn.disabled = true;
    btn.innerHTML = "<span>Enviando mensaje...</span>";

    setTimeout(() => {
      form.reset();
      btn.disabled = false;
      btn.innerHTML = originalText;
      showToast("¡Mensaje enviado con éxito! Nos comunicaremos pronto.");
    }, 800);
  });
}

function showToast(msg) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.className = "toast-msg";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${msg}</span>
  `;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}
