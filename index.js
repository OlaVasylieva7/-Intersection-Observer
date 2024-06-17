const initializeObservers = () => {

  const onEntry = (entries, observer) => {
    entries.forEach((entry) => {
        
      const image = entry.target;
      if (entry.isIntersecting) {
        const src = image.getAttribute("data-src");
        image.setAttribute("src", src);
        observer.unobserve(image);
      }
    });
  };

  const imagesObserver = new IntersectionObserver(onEntry, { threshold: 0.5 });
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    imagesObserver.observe(img);
  });
};

const loadBtn = document.getElementById("load-images");
loadBtn.addEventListener("click", initializeObservers);
