const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

/* Navbar dropdown - Vanilla JavaScript */
const dropdownButton = document.querySelector("#dropdownBtn");
const dropdownMenu = document.querySelector("#dropdownMenu");
const dropdownArrow = document.querySelector("#dropdownArrow");
const dropdown = document.querySelector(".dropdown");

dropdownButton.addEventListener("click", (event) => {
  event.stopPropagation();

  const isOpen = dropdownMenu.classList.toggle("show");
  dropdownButton.setAttribute("aria-expanded", isOpen);
  dropdownArrow.textContent = isOpen ? "▲" : "▼";
});

// Bonus: close the dropdown when clicking outside it.
document.addEventListener("click", (event) => {
  if (!dropdown.contains(event.target)) {
    dropdownMenu.classList.remove("show");
    dropdownButton.setAttribute("aria-expanded", "false");
    dropdownArrow.textContent = "▼";
  }
});

// Close the dropdown after selecting one of its menu items.
dropdownMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    dropdownMenu.classList.remove("show");
    dropdownButton.setAttribute("aria-expanded", "false");
    dropdownArrow.textContent = "▼";
  });
});


document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const sections = [...document.querySelectorAll("main section[id]")];
const navAnchors = [...document.querySelectorAll(".nav-links a")];

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      navAnchors.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
    }
  });
}, {threshold: 0.35});
sections.forEach(section => observer.observe(section));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

const filters = document.querySelectorAll(".filter");
const items = document.querySelectorAll(".project-item");

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(btn => btn.classList.remove("active"));
    filter.classList.add("active");
    const selected = filter.dataset.filter;

    items.forEach(item => {
      const categories = item.dataset.category.split(" ");
      item.classList.toggle("hidden", selected !== "all" && !categories.includes(selected));
    });
  });
});

const modal = document.getElementById("projectModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const closeModal = () => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
};

document.querySelectorAll(".view-btn").forEach(button => {
  button.addEventListener("click", () => {
    modalImage.src = button.dataset.image;
    modalImage.alt = button.dataset.title;
    modalTitle.textContent = button.dataset.title;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalBackdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", e => {
  if(e.key === "Escape") closeModal();
});

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const note = document.getElementById("formNote");
  note.textContent = `Thanks, ${name || "there"}! Your message is ready to be connected to your email service.`;
  e.target.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});
