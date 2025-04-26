// src/main.js
import './style.css';
import 'slick-carousel/slick/slick.css'; // Import Slick CSS (you might need to adjust the path)
import 'slick-carousel/slick/slick-theme.css'; // Import Slick theme CSS (you might need to adjust the path)
import 'slick-carousel/slick/slick.min.js'; // This might not be strictly necessary if included via CDN

$(function() {
  $('.your-class').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    infinite: true,
  });
});



