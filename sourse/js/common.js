var btnToggle = $(".toggle-menu-mobile--js")
		menu = $(".menu-mobile--js")

jQuery(document).ready(function ($) {
	$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/2.png);"></div>')
	// для свг
	svg4everybody({}); 
	JSCCommon.magnificPopupCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.mobileMenu();

	JSCCommon.inputMask();

	JSCCommon.inlineSVG(); 
	JSCCommon.CustomInputFile(); 
 
	function heightses() {

		var w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		var topH = $("header ").innerHeight();
		$(" .menu-mobile__title").height(  $('.top-nav').height());
		$(".header ").height(  $('.top-nav').height());
	} 

	$(window).resize(function () {
		heightses();

	});
	$(window).on("load", function () {
		heightses();

	})

	heightses();
 
	// листалка по стр
	$("  .scroll-link").click(function () {
	       var elementClick = $(this).attr("href");
	       var destination = $(elementClick).offset().top;

	           $('html, body').animate({ scrollTop: destination }, 1100);

	       return false;
	   }); 
 
 	var icon = '<svg width="32" height="122" viewBox="0 0 32 122" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 0.646484L31.2167 60.2786L1 121.128" stroke="#D1D1D1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/> </svg>';
 	var icon2 = '<svg width="89" height="22" viewBox="0 0 89 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M79.0918 21.2302C78.7441 21.5717 78.0488 21.5717 77.5273 21.2302C77.1797 20.8888 77.1797 20.2058 77.5273 19.6937L85.3496 12.0107L1.04297 12.0107C0.521485 12.1815 8.58236e-07 11.6693 9.03013e-07 11.1571C9.47791e-07 10.6449 0.521485 10.1327 1.04297 10.1327L85.3496 10.1327L77.5273 2.44975C77.1797 2.10829 77.1797 1.42536 77.5273 0.913167C77.875 0.571704 78.5703 0.571704 79.0918 0.913167L88.6523 10.3034C89 10.6449 89 11.3278 88.6523 11.84L79.0918 21.2302Z" fill="#1E201D" fill-opacity="0.3"/>';

	

	var arrl2 = (' <div class="r">' + icon),
		arrr2 = (' <div class="l">' + icon);
	// карусель
	var arrl3 = (' <div class="r">' + icon2),
		arrr3 = (' <div class="l">' + icon2);
	// карусель
	
	$('.header-block__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		speed: 500, 
		loop: true,
		arrows: true, 
		prevArrow: arrr2,
		nextArrow: arrl2,
	});
	$('.s-logos__slider--js').slick({
		slidesToShow: 2,
		slidesToScroll: 1, 
		dots: false,
		speed: 500, 
		loop: true,
		arrows: true, 
		mobileFirst: true, 
		prevArrow: arrr2,
		nextArrow: arrl2,
		// the magic
		responsive: [ 
			 {

      breakpoint: 992,
      settings: {
        slidesToShow: 5, 
      }

		},
		
			 {

      breakpoint: 768,
      settings: {
        slidesToShow: 4, 
      }

		},
		
			 {

      breakpoint: 576,
      settings: {
        slidesToShow: 3, 
      }

		},


	 ]
	});

	
	$('.s-gal__slider--js').slick({
		slidesToShow: 2,
		slidesToScroll: 1, 
		dots: false,
		speed: 500, 
		loop: true,
		arrows: true, 
		mobileFirst: true, 
		prevArrow: arrr3,
		nextArrow: arrl3,
		// the magic
		responsive: [ 
 
			 {

      breakpoint: 576,
      settings: {
        slidesToShow: 3, 
      }

		}, 
	 ]
	});
	
	$('.s-gal__slider--js').slick({
		slidesToShow: 2,
		slidesToScroll: 1, 
		dots: false,
		speed: 500, 
		loop: true,
		arrows: true, 
		mobileFirst: true, 
		prevArrow: arrr3,
		nextArrow: arrl3,
		// the magic
		responsive: [ 
 
			 {

      breakpoint: 576,
      settings: {
        slidesToShow: 3, 
      }

		}, 
	 ]
	});
	
	$('.s-treners__slider--js').slick({
		slidesToShow: 1,
		slidesToScroll: 1, 
		dots: false,
		speed: 500, 
		loop: true,
		arrows: true, 
		mobileFirst: true, 
		prevArrow: arrr3,
		nextArrow: arrl3,
		// the magic
		responsive: [ 
 
			 {

      breakpoint: 992,
      settings: {
        slidesToShow: 3, 
      }

		}, 
		
			 {

      breakpoint: 576,
      settings: {
        slidesToShow: 2, 
      }

		}, 

	 ]
	});


	
	$(' .s-our-directions__slider--js').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		rows: 2,
		dots: false,
		speed: 500, 
		loop: true,
		arrows: true, 
		prevArrow: arrr3,
		nextArrow: arrl3,
		// the magic
		responsive: [  {

      breakpoint: 575.99,
      settings: {
        slidesToShow: 1, 
      }

    } ]
	});
	
	$(' .s-programs__slider--js').slick({
		slidesToShow: 2,
		slidesToScroll: 1, 
		dots: false,
		speed: 500, 
		loop: true,
		arrows: true, 
		prevArrow: arrr3,
		nextArrow: arrl3,
		// the magic
		responsive: [  {

      breakpoint: 767.99,
      settings: {
        slidesToShow: 1, 
      }

    } ]
	});

	


	$(window).on("load", function () {
		// cкрывает меню в dropdown
		var wrapper = document.querySelector(".section-nav__body--js");
		if(wrapper) {

			var nav = priorityNav.init({
				mainNavWrapper: ".section-nav__body--js", // mainnav wrapper selector (must be direct parent from mainNav)
			mainNav: ".nav-ul", // mainnav selector. (must be inline-block)
			navDropdownLabel: wrapper.dataset.droptitle,
			navDropdownClassName: "nav__dropdown", // class used for the dropdown.
			navDropdownToggleClassName: "nav__dropdown-toggle", // class used for the dropdown toggle.
			navDropdownBreakpointLabel: "Выбрать", //button label for navDropdownToggle when the breakPoint is reached.
			breakPoint:                 0, 
		});
	}
		
		// setTimeout(function(){
			
		// 	$(".nav__dropdown").mCustomScrollbar();
		// 	$(document).on('click', '.nav__dropdown-toggle', function () {
		// 		// heightses();
		// 		// $(".nav__dropdown").mCustomScrollbar("update");
		// 		$(".nav__dropdown").mCustomScrollbar();
		
		// 	});
		// }, 100)
});


var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

$('.datepicker-date').each(function () {
	var th = $(this);
	th.datepicker({
		locale: 'ru-ru',
		uiLibrary: 'bootstrap4',
		format: 'dd.mm.yyyy',
		// minDate: today,
		icons: {
			rightIcon: '<i class="custon-icon" ><img src="img/calendar.svg"></i>'
	}
		// modal: true
	});
 
})

		// modal галерея
		$(".gal").each(function () {

			$(this).find("a").magnificPopup({
				type: 'image',
				closeOnContentClick: false,
				closeBtnInside: false,
				mainClass: 'mfp-with-zoom mfp-img-mobile',
				tClose: 'Закрыть (Esc)',
				image: {
					verticalFit: true,
					// titleSrc: function(item) {
					//   return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
					// }

				},
				gallery: {
					enabled: true
				}
			});
		})



});
JSCCommon = {
	CustomInputFile: function CustomInputFile() {
		var file = $(".add-file input[type=file]");
		file.change(function () {
			var filename = $(this).val().replace(/.*\\/, "");
			var name = $(".add-file__filename  ");
			name.text(filename);

		});
	},
	// /CustomInputFile
	// часть вызов скриптов здесь, для использования при AJAX
	// функции для запуска lazy
	LazyFunction: function() {
		// Для лэзи загрузки 

		document.addEventListener("DOMContentLoaded", function () {
			var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
			var active = false;

			const lazyLoad = function () {
				if (active === false) {
					active = true;

					setTimeout(function () {
						lazyImages.forEach(function (lazyImage) {
							if (((lazyImage.getBoundingClientRect().top - lazyImage.closest(".block-with-lazy").clientHeight * 2) <= window.innerHeight && (lazyImage.getBoundingClientRect().bottom + lazyImage.closest(".block-with-lazy").clientHeight * 2) >= 0) && getComputedStyle(lazyImage).display !== "none") {
								lazyImage.src = lazyImage.dataset.src;
								// lazyImage.srcset = lazyImage.dataset.srcset;
								lazyImage.classList.remove("lazy");

								lazyImages = lazyImages.filter(function (image) {
									return image !== lazyImage;
								});

								if (lazyImages.length === 0) {
									document.removeEventListener("scroll", lazyLoad);
									window.removeEventListener("resize", lazyLoad);
									window.removeEventListener("orientationchange", lazyLoad);
									window.addEventListener("DOMContentLoaded", lazyLoad);
								}
							}
						});

						active = false;
					}, 200);
				}
			};

			document.addEventListener("scroll", lazyLoad);
			window.addEventListener("resize", lazyLoad);
			window.addEventListener("orientationchange", lazyLoad);
			window.addEventListener("DOMContentLoaded", lazyLoad);
		});


		// лэзи 
		document.addEventListener("DOMContentLoaded", function () {
			var lazyImages = [].slice.call(document.querySelectorAll(".lazy-bg"));
			var active = false;

			const lazyLoad = function () {
				if (active === false) {
					active = true;

					setTimeout(function () {
						lazyImages.forEach(function (lazyImage) {
							if (((lazyImage.getBoundingClientRect().top - lazyImage.closest(".block-with-lazy").clientHeight * 2) <= window.innerHeight && (lazyImage.getBoundingClientRect().bottom + lazyImage.closest(".block-with-lazy").clientHeight * 2) >= 0) && getComputedStyle(lazyImage).display !== "none") {
								lazyImage.parentElement.style.backgroundImage = 'url(' + lazyImage.dataset.src + ')';
								lazyImage.src = lazyImage.dataset.src;
								// lazyImage.srcset = lazyImage.dataset.srcset;
								lazyImage.classList.remove("lazy");

								lazyImages = lazyImages.filter(function (image) {
									return image !== lazyImage;
								});

								if (lazyImages.length === 0) {
									document.removeEventListener("scroll", lazyLoad);
									window.removeEventListener("resize", lazyLoad);
									window.removeEventListener("orientationchange", lazyLoad);
									window.addEventListener("DOMContentLoaded", lazyLoad);
								}
							}
						});

						active = false;
					}, 200);
				}
			};

			document.addEventListener("scroll", lazyLoad);
			window.addEventListener("resize", lazyLoad);
			window.addEventListener("orientationchange", lazyLoad);
			window.addEventListener("DOMContentLoaded", lazyLoad);
		});

	},


	// /LazyFunction

	magnificPopupCall: function () {
		$('.popup-with-move-anim').magnificPopup({
			type: 'inline',

			fixedContentPos: true,
			fixedBgPos: true,

			overflowY: 'auto',

			closeBtnInside: true,
			preloader: false,

			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-zoom-in',
			tClose: 'Закрыть (Esc)',
		});

		// / modal window


		// /modal галерея
	},
	// /magnificPopupCall
	mobileMenu: function () {
		// закрыть/открыть мобильное меню

		btnToggle.click(function () {

			btnToggle.toggleClass("on");
			// $("body").toggleClass("fixed");
			menu.toggleClass("active");
			$("body, html").toggleClass("fixed");
			return false;
			
		});
		// $('.menu-mobile--js ul li a').on('click', function () {
		// 	$(".menu-mobile--js .toggle-mnu").click();
		// });

		$(document).mouseup(function (e) {
			var container = $(".menu-mobile--js.active");
			if (container.has(e.target).length === 0) {
				btnToggle.removeClass("on");
				// $("body").toggleClass("fixed");
				menu.removeClass("active");
				$("body, html").removeClass("fixed");
			}
		});
		// закрыть меню при горизонтальном свайпе
		$('.menu-mobile--js.active').swipe({
			swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
				if (direction == 'left') {
					btnToggle.removeClass("on");
					$(".menu-mobile--js.active").removeClass("active");
					$("body, html").removeClass("fixed");
				}
				if (direction == 'right') {
					btnToggle.removeClass("on");
					$(".menu-mobile--js.active").removeClass("active");
					$("body, html").removeClass("fixed");
				}
			},
			triggerOnTouchEnd: false,
		});
 
	},
	// /mobileMenu

	// табы  . 
	tabscostume: function (tab) {
		$(document).on('click', '.' + tab + '__btn', function (e) {

			e.preventDefault(); 
		})
		$(document).on('click', '.' + tab + '__btn:not(.active)', function (e) {
			// e.preventDefault(); 
			var link = $(this).attr('href')
			console.log(link)
			$(".tabs__nav").find("a").removeClass('active')
			$(this)
				.addClass('active').parent()
				.closest('.' + tab).find('.' + tab + '__content' + link)
				.fadeIn().addClass('active')
				.siblings().hide().removeClass('active')

		});
	},
	// /табы  . 



	inlineSVG: function () {
		//Replace all SVG images with inline SVG
		$('img.img-svg').each(function () {
			var $img = $(this);
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');

			$.get(imgURL, function (data) {
				// Get the SVG tag, ignore the rest
				var $svg = $(data).find('svg');

				// Add replaced image's classes to the new SVG
				if (typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass + ' replaced-svg');
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr('xmlns:a');

				// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
				if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
					$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
				}


				// Replace image with new SVG
				$img.replaceWith($svg);

			}, 'xml');

		});
	},
 
	// /CustomYoutubeBlock
	inputMask: function () {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+]375[(][0-9]{2}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+375(99)999-99-99");
	}
	// /inputMask

};

JSCCommon.LazyFunction();
/***/

