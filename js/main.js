// News Carousel Functionality
let currentNewsIndex = 0;

function moveCarousel(direction) {
  const newsItems = document.querySelectorAll('.news-item');
  
  // Remove active class from current item
  newsItems[currentNewsIndex].classList.remove('active');
  
  // Calculate new index
  currentNewsIndex += direction;
  
  // Wrap around
  if (currentNewsIndex >= newsItems.length) {
    currentNewsIndex = 0;
  } else if (currentNewsIndex < 0) {
    currentNewsIndex = newsItems.length - 1;
  }
  
  // Add active class to new item
  newsItems[currentNewsIndex].classList.add('active');
}

// Auto-advance carousel every 5 seconds
setInterval(() => {
  moveCarousel(1);
}, 5000);

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
