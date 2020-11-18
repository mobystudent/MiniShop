$(window).on('load', () => {
	showFilter();
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
