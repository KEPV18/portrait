$(document).ready(function() {
  // سلايدر الصور العلوي
  var currentIndex = 0;
  var slides = $('.slide');
  var totalSlides = slides.length;

  function showSlide(index) {
    slides.hide();
    slides.eq(index).show();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }

  $('#nextBtn').click(nextSlide);
  $('#prevBtn').click(prevSlide);

  // توقف التحرك التلقائي للسلايدر الأول
  $('#slider').hover(function() {
    clearInterval(intervalId1);
  }, function() {
    intervalId1 = setInterval(nextSlide, 3000);
  });

  // سلايدر Featured Products السفلي
  var currentIndexFeatured = 0;
  var featuredSlides = $('.featured-slide');
  var totalFeaturedSlides = featuredSlides.length;

  function showFeaturedSlide(index) {
    featuredSlides.hide();
    featuredSlides.eq(index).show();
  }

  $('#nextFeaturedBtn').click(function() {
    currentIndexFeatured = (currentIndexFeatured + 1) % totalFeaturedSlides;
    showFeaturedSlide(currentIndexFeatured);
  });

  $('#prevFeaturedBtn').click(function() {
    currentIndexFeatured = (currentIndexFeatured - 1 + totalFeaturedSlides) % totalFeaturedSlides;
    showFeaturedSlide(currentIndexFeatured);
  });

  // توقف التحرك التلقائي للسلايدر Featured Products
  $('#featured-products').hover(function() {
    clearInterval(intervalId2);
  }, function() {
    intervalId2 = setInterval(function() {
      currentIndexFeatured = (currentIndexFeatured + 1) % totalFeaturedSlides;
      showFeaturedSlide(currentIndexFeatured);
    }, 3000);
  });
});
