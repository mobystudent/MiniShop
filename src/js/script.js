import $ from 'jquery';
import slick from 'slick-carousel';

$(window).on('load', () => {
	showFilter();
	slider();
});

function showFilter() {
	$('.filter__field--block').click(function(){
		$(this).toggleClass('filter__field--active').next().slideToggle();
	});

	$('.filter__header--select').click(function(){
		if(!$(this).hasClass('filter__header--active')) {
			new Promise((resolve) => {
				$('.filter__header--select').removeClass('filter__header--active').next().slideUp(250);
				setTimeout(() => resolve(), 250);
			}).then(() => {
				$(this).addClass('filter__header--active').next().slideDown();
			});
	 	}
		else {
			$(this).removeClass('filter__header--active').next().slideUp();
		}
	});
}

function slider() {
	$("#slider").slick({
		infinite: false,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 3,
		easing: 'ease-in',
		dots: true,
		appendDots: '.slider__dots',
		prevArrow: '.slider__prev',
		nextArrow: '.slider__next',
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
}
