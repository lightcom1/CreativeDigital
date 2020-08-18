const menuToggle = document.querySelector('.menu-icon');
const mobileNavContainer = document.querySelector('.mobile-nav');
menuToggle.onclick = function() {
	menuToggle.classList.toggle('menu-icon-active');
	mobileNavContainer.classList.toggle('mobile-nav--active');
}
//hide the menu when clicking on the link
$(document).ready(function() {
	$('.mobile-nav__link').click(function(event) {
		mobileNavContainer.classList.remove('mobile-nav--active');
		menuToggle.classList.remove('menu-icon-active')
	});
});
//hide the menu when clicking on the body
$(document).mouseup(function(e) {
	if (!$('.menu-icon').is(e.target) && $('.menu-icon').has(e.target).length === 0 &&
		!$('.mobile-nav').is(e.target) && $('.mobile-nav').has(e.target).length === 0) {
		mobileNavContainer.classList.remove('mobile-nav--active');
		menuToggle.classList.remove('menu-icon-active');
	}
});
//To top button 
var btn = $('#button');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


$(function () {
	$(window).scroll(function() {
	    $('.Advantages__text, .Blog__intro, .Blog__text, .project__intro, .info__title, .info__subtitle, .Team__intro, .Team__text ').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInLeftBig");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.feature, .article, .comment, .employee').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInUp");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.footer').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+770) {
	            $(this).addClass("animate__fadeInUp");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.container').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+770) {
	            $(this).addClass("animate__slideInLeft");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.container-second, .phone__shadow').each(function(){
	        var imagePos = $(this).offset().top;
	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+780) {
	            $(this).addClass("animate__slideInRight");
	        }
	    });
	});
})
