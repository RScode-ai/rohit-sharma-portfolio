"use strict";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- navigation ---------- */
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll("[data-link]").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("is-open");
    navToggle.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  nav.classList.toggle("is-scrolled", window.scrollY > 24);
}, { passive: true });

/* active section indicator + scroll progress */
const sections = document.querySelectorAll("main section[id]");
const scrollProgress = document.getElementById("scrollProgress");

function onScroll() {
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  scrollProgress.style.width = max > 0 ? `${(window.scrollY / max) * 100}%` : "0%";

  let currentId = sections[0] ? sections[0].id : "";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 140) currentId = section.id;
  });
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${currentId}`);
  });
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* back to top */
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("is-visible", window.scrollY > 600);
}, { passive: true });
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
});

/* ---------- reveal on scroll ---------- */
if (prefersReducedMotion) {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
}

/* ---------- render: projects ---------- */
const projectsGrid = document.getElementById("projectsGrid");

function renderProjects() {
  projectsGrid.innerHTML = PROJECTS.map((p, i) => `
    <article class="project-card reveal" style="transition-delay:${Math.min(i * 60, 240)}ms">
      <div class="project-card-body">
        <div class="project-card-heading">
          <span class="project-card-icon" aria-hidden="true">${p.title.split(/\s+/).map((word) => word[0]).join("").slice(0, 2)}</span>
          <div class="project-card-title">
            <h3>${p.title}</h3>
            <ul class="project-tech">${p.tech.map((t) => `<li>${t}</li>`).join("")}</ul>
          </div>
          <span class="project-card-arrow" aria-hidden="true">↗</span>
        </div>
        <p class="project-card-description">${p.tagline}</p>
        <div class="project-actions">
          ${p.github
            ? `<a href="${p.github}" class="project-action project-action-primary" target="_blank" rel="noopener noreferrer">GitHub Repo <span aria-hidden="true">↗</span></a>`
            : `<button type="button" class="project-action project-action-primary is-unavailable" disabled title="Add the GitHub repository URL in data.js">GitHub Repo</button>`}
          ${p.demo
            ? `<a href="${p.demo}" class="project-action" target="_blank" rel="noopener noreferrer">Live Project <span aria-hidden="true">↗</span></a>`
            : `<button type="button" class="project-action is-unavailable" disabled title="Add the deployed project URL in data.js">Live Project</button>`}
          <button type="button" class="link-btn link-btn-detail" data-project="${p.id}">Details</button>
        </div>
      </div>
    </article>
  `).join("");

  const revealObserverEls = projectsGrid.querySelectorAll(".reveal");
  if (prefersReducedMotion) {
    revealObserverEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealObserverEls.forEach((el) => obs.observe(el));
  }
}
renderProjects();

/* Native horizontal scrolling supports touch swipes and trackpad gestures. */
const projectsPrev = document.getElementById("projectsPrev");
const projectsNext = document.getElementById("projectsNext");
const carouselStatus = document.getElementById("carouselStatus");
const projectsToggle = document.getElementById("projectsToggle");

function updateCarouselControls() {
  const isExpanded = projectsGrid.classList.contains("is-expanded");
  const maxScroll = projectsGrid.scrollWidth - projectsGrid.clientWidth;
  const atStart = projectsGrid.scrollLeft <= 1;
  const atEnd = projectsGrid.scrollLeft >= maxScroll - 1;
  const cards = projectsGrid.querySelectorAll(".project-card");
  const cardStep = cards.length ? cards[0].getBoundingClientRect().width + parseFloat(getComputedStyle(projectsGrid).columnGap) : 0;
  const visibleIndex = cardStep ? Math.round(projectsGrid.scrollLeft / cardStep) + 1 : 1;

  projectsPrev.disabled = isExpanded || atStart;
  projectsNext.disabled = isExpanded || atEnd;
  carouselStatus.textContent = isExpanded
    ? `Showing all ${cards.length} projects`
    : `Project ${Math.min(visibleIndex, cards.length)} of ${cards.length}`;
}

function scrollProjects(direction) {
  const firstCard = projectsGrid.querySelector(".project-card");
  if (!firstCard) return;
  const gap = parseFloat(getComputedStyle(projectsGrid).columnGap);
  const distance = firstCard.getBoundingClientRect().width + gap;
  projectsGrid.scrollBy({
    left: direction * distance,
    behavior: prefersReducedMotion ? "auto" : "smooth"
  });
}

projectsPrev.addEventListener("click", () => scrollProjects(-1));
projectsNext.addEventListener("click", () => scrollProjects(1));
projectsToggle.addEventListener("click", () => {
  const isExpanded = projectsGrid.classList.toggle("is-expanded");
  document.getElementById("projectsCarousel").classList.toggle("is-expanded", isExpanded);
  projectsToggle.setAttribute("aria-expanded", String(isExpanded));
  projectsToggle.textContent = isExpanded ? "Show Featured View" : "View All Projects";
  projectsGrid.scrollTo({ left: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  updateCarouselControls();
});
projectsGrid.addEventListener("scroll", updateCarouselControls, { passive: true });
window.addEventListener("resize", updateCarouselControls);
updateCarouselControls();

/* ---------- project details modal ---------- */
const projectModal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");
let lastFocusedEl = null;

function openModal(modalEl, focusTarget) {
  lastFocusedEl = document.activeElement;
  modalEl.hidden = false;
  document.body.classList.add("no-scroll");
  requestAnimationFrame(() => modalEl.classList.add("is-open"));
  (focusTarget || modalEl.querySelector(".modal-close")).focus();
}
function closeModal(modalEl) {
  modalEl.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
  setTimeout(() => { modalEl.hidden = true; }, prefersReducedMotion ? 0 : 220);
  if (lastFocusedEl) lastFocusedEl.focus();
}

projectsGrid.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-project]");
  if (!btn) return;
  const project = PROJECTS.find((p) => p.id === btn.dataset.project);
  if (!project) return;
  const d = project.details;
  modalBody.innerHTML = `
    <h2 id="modalTitle">${project.title}</h2>
    <p class="modal-tagline">${project.tagline}</p>
    <div class="modal-tech">${project.tech.map((t) => `<span>${t}</span>`).join("")}</div>
    <dl class="case-study">
      <div><dt>Problem</dt><dd>${d.problem}</dd></div>
      <div><dt>Solution</dt><dd>${d.solution}</dd></div>
      <div><dt>Architecture</dt><dd>${d.architecture}</dd></div>
      <div><dt>Key Features</dt><dd><ul>${d.features.map((f) => `<li>${f}</li>`).join("")}</ul></dd></div>
      <div><dt>Challenges</dt><dd>${d.challenges}</dd></div>
      <div><dt>What I Learned</dt><dd>${d.learned}</dd></div>
    </dl>
  `;
  openModal(projectModal);
});

document.getElementById("modalClose").addEventListener("click", () => closeModal(projectModal));
document.getElementById("modalOverlay").addEventListener("click", () => closeModal(projectModal));

/* shared modal keyboard handling */
projectModal.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal(projectModal);
  if (e.key === "Tab") {
    const focusable = projectModal.querySelectorAll("button, a[href]");
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});
