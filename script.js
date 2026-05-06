const slides = document.querySelectorAll(".art-slide");

let currentSlide = 0;

function showNextSlide() {
  slides[currentSlide].classList.remove("active");

  currentSlide = currentSlide + 1;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 4000);

const filterButtons = document.querySelectorAll(".filter-button");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.getAttribute("data-filter");

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    portfolioCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");

      if (selectedCategory === "all" || selectedCategory === cardCategory) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});

const projectCards = document.querySelectorAll(".portfolio-card");
const projectLightbox = document.querySelector("#projectLightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxTitle = document.querySelector(".lightbox-text h2");
const lightboxDescription = document.querySelector(".lightbox-text p");
const lightboxDetails = document.querySelector(".lightbox-details");
const lightboxClose = document.querySelector(".lightbox-close");

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    const projectImage = card.querySelector("img");
    const projectTitle = card.querySelector(".portfolio-card-text h2");
    const projectDescription = card.querySelector(".portfolio-card-text p");
    const projectDetails = card.querySelector(".project-details");

    lightboxImage.src = projectImage.src;
    lightboxImage.alt = projectImage.alt;
    lightboxTitle.textContent = projectTitle.textContent;
    lightboxDescription.textContent = projectDescription.textContent;

    if (projectDetails) {
      lightboxDetails.innerHTML = projectDetails.innerHTML;
    } else {
      lightboxDetails.innerHTML = "";
    }

    projectLightbox.classList.add("active");
    projectLightbox.setAttribute("aria-hidden", "false");
  });
});

function closeLightbox() {
  projectLightbox.classList.remove("active");
  projectLightbox.setAttribute("aria-hidden", "true");
}

lightboxClose.addEventListener("click", closeLightbox);

projectLightbox.addEventListener("click", (event) => {
  if (event.target === projectLightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});
