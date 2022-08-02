$(function () {

	$('.bi-list').click(function () {
		$(this).addClass('on'),
			$('.bi-x-lg').addClass('on'),
			$('#gnb').addClass('on')
	});

	$('.bi-x-lg').click(function () {
		$(this).removeClass('on'),
			$('.bi-list').removeClass('on'),
			$('#gnb').removeClass('on')
	});


	// AOS 초기화
	AOS.init();

	document.querySelector("#upi").addEventListener("click", (e) => {
		e.preventDefault();
		window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth"
		});
	});

});

