const hiddenElements = document.querySelectorAll(".hidden");
const hiddenTitles = document.querySelectorAll(".hidden_title");
const hiddenProjects = document.querySelectorAll(".project_hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    // SECCIONES
    if (entry.target.classList.contains("hidden")) {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }

    }

    // PROYECTOS
    if (entry.target.classList.contains("project_hidden")) {

      if (entry.isIntersecting) {
        entry.target.classList.add("project_show");
      } else {
        entry.target.classList.remove("project_show");
      }

    }

    // TÍTULOS
if (entry.target.classList.contains("hidden_title")) {

  if (entry.isIntersecting) {
    entry.target.classList.add("show_title");
  } else {
    entry.target.classList.remove("show_title");
  }

}

  });
},
{
  threshold: 0.15,
  rootMargin: "-10% 0px -10% 0px"
});

hiddenElements.forEach((el) => observer.observe(el));
hiddenProjects.forEach((el) => observer.observe(el));
hiddenTitles.forEach((el) => observer.observe(el));