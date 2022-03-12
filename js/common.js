document.addEventListener('DOMContentLoaded', function() {

	const showSlider = new Swiper('.showcase-carousel', {
		loop: true,
		slidesPerView: 3,
		speed: 1800,
		centeredSlides: true,
		navigation: {
			nextEl: '.showcase-nav_next',
			prevEl: '.showcase-nav_prev',
		}
	})

	document.querySelector('video').playbackRate = 2;

})
