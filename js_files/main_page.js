const bar= document.querySelector(".nav-bar");
const sectionOne = document.querySelector("header");

const sectionOneOptions = {
  rootMargin: "-100px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      bar.classList.add("nav-bar-color");
						bar.style.top = "0";
    } else {
      bar.classList.remove("nav-bar-color");
					 bar.style.top = "20px";
						
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);


