const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});



const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    name: "Cameron Williamson",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    text: "Photography captures emotions and memories that last forever. Absolutely amazing service.",
    name: "Sophia Turner",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    text: "Professional, creative and friendly photographer. Highly recommended!",
    name: "Daniel Smith",
    img: "https://images.unsplash.com/photo-1502767089025-6572583495b0"
  }
];

let index = 0;

const textEl = document.getElementById("testiText");
const nameEl = document.getElementById("clientName");
const imgEl = document.getElementById("testiImg");

document.getElementById("nextBtn").addEventListener("click", () => {
  index = (index + 1) % testimonials.length;
  updateTestimonial();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
});

function updateTestimonial(){
  textEl.style.opacity = 0;
  imgEl.style.opacity = 0;

  setTimeout(() => {
    textEl.textContent = testimonials[index].text;
    nameEl.textContent = testimonials[index].name;
    imgEl.src = testimonials[index].img;

    textEl.style.opacity = 1;
    imgEl.style.opacity = 1;
  }, 200);
}
