$(document).ready(function() {
  // سلايدر الصور العلوي
  var currentIndex = 0;
  var slides = $('.slide');
  var totalSlides = slides.length;
  var intervalId1; // تعريف المتغير intervalId1

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
  var intervalId2; // تعريف المتغير intervalId2

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


$(document).ready(function() {
  // سرعة الاسكرول
  var scrollSpeed = 50; // يمكنك تغيير هذه القيمة حسب الحاجة

  // الاسكرول بالماوس من الأعلى للأسفل
  $(document).on('mousewheel', function(event) {
    if (event.originalEvent.deltaY > 0) {
      // اتجاه أسفل
      $('html, body').stop().animate({
        scrollTop: '+=100'
      }, scrollSpeed);
    } else {
      // اتجاه أعلى
      $('html, body').stop().animate({
        scrollTop: '-=100'
      }, scrollSpeed);
    }
  });
});


$(document).ready(function() {
  var scrollSpeed = 50;

  $(document).on('mousewheel', function(event) {
    if (event.originalEvent.deltaY > 0) {
      // اتجاه أسفل
      $('html, body').stop().animate({
        scrollTop: '+=100'
      }, scrollSpeed);
    } else {
      // اتجاه أعلى
      $('html, body').stop().animate({
        scrollTop: '-=100'
      }, scrollSpeed);
    }
  });
});
