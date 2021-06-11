function Circlle(el) {
	$(el)
		.circleProgress({ fill: { color: '#ff5c5c' } })
		.on('circle-animation-progress', function (event, progress, stepValue) {
			$(this)
				.find('strong')
				.text(String(stepValue.toFixed(2)).substr(2) + '%');
		});
}

Circlle('.round');

$('a[href*="#"]').on('click', function (e) {
	e.preventDefault();

	$('html, body').animate(
		{
			scrollTop: $($(this).attr('href')).offset().top,
		},
		500,
		'linear'
	);
});

$(function () {
	$('.skill_per').each(function () {
		$this = $(this);
		var per = $(this).attr('per');
		$this.css('width', per + '%');
		$this
			.find('.value')
			.text(per + '%')
			.css('opacity', '1');
	});
});

wow = new WOW({});
wow.init();
