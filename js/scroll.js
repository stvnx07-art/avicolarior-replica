document.addEventListener("DOMContentLoaded", function() {
  const elementsToReveal = document.querySelectorAll(
    '.egg__card, .productos .item, .beneficio-item, .cta__inner'
  );
  
  elementsToReveal.forEach(el => {
    el.classList.add('reveal');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // If we want it to animate only once, uncomment next line:
        // observer.unobserve(entry.target); 
      } else {
        // Allows repeating the animation when scrolling back
        entry.target.classList.remove('active'); 
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  });

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
});
