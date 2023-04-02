(function ($) {
"use strict";
// Header Type = Fixed
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var box = $('.header-text').height();
  var header = $('header').height();
  if (scroll >= box - header) {
    $("header").addClass("background-header");
  } else {
    $("header").removeClass("background-header");
  }
});
$('.loop').owlCarousel({
  center: true,
  items:1,
  loop:true,
  autoplay: true,
  nav: true,
  margin:0,
  responsive:{ 
    1200:{
      items:5
    },
    992:{
      items:3
    },
    760:{
      items:2
    }
  }
});
$("#modal_trigger").leanModal({
  top: 100,
  overlay: 0.6,
  closeButton: ".modal_close"
});
$(function() {
    // Calling Login Form
    $("#login_form").click(function() {
      $(".social_login").hide();
      $(".user_login").show();
      return false;
    });
    // Calling Register Form
    $("#register_form").click(function() {
      $(".social_login").hide();
      $(".user_register").show();
      $(".header_title").text('Register');
      return false;
    });
    // Going back to Social Forms
    $(".back_btn").click(function() {
      $(".user_login").hide();
      $(".user_register").hide();
      $(".social_login").show();
      $(".header_title").text('Login');
      return false;
    });
});
  // Acc
  $(document).on("click", ".naccs .menu div", function() {
    var numberIndex = $(this).index();
    if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(".naccs ul li").removeClass("active");
        $(this).addClass("active");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");
        var listItemHeight = $(".naccs ul")
          .find("li:eq(" + numberIndex + ")")
          .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
      }
  });
  // Menu Dropdown Toggle
  if ($('.menu-trigger').length){
    $(".menu-trigger").on('click', function() { 
      $(this).toggleClass('active');
      $('.header-area .nav').slideToggle(200);
    });
  }
  // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var width = $(window).width();
        if (width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.header-area .nav').slideUp(200);
        }
        $('html,body').animate({
          scrollTop: (target.offset().top) + 1
        }, 700);
        return false;
      }
    }
  });
  $(document).ready(function () {
    $(document).on("scroll", onScroll);
    //smoothscroll
    $('.scroll-to-section a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      $('.scroll-to-section a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');
      var target = this.hash, menu = target;
      target = $(this.hash);
      $('html, body').stop().animate({
          scrollTop: (target.offset().top) + 1
      }, 500, 'swing', function () {
          window.location.hash = menu;
          $(document).on("scroll", onScroll);
      });
    });
  });
  function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.nav a').each(function () {
      if ($(this).attr("href")[0] != '#') { return }
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('.nav ul li a').removeClass("active");
        currLink.addClass("active");
      }
      else{
        currLink.removeClass("active");
      }
    });
  }
  // Acc
  $(document).on("click", ".naccs .menu div", function() {
    var numberIndex = $(this).index();
    if (!$(this).is("active")) {
      $(".naccs .menu div").removeClass("active");
      $(".naccs ul li").removeClass("active");
      $(this).addClass("active");
      $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");
      var listItemHeight = $(".naccs ul")
        .find("li:eq(" + numberIndex + ")")
        .innerHeight();
      $(".naccs ul").height(listItemHeight + "px");
    }
  });
  // Page loading animation
  $(window).on('load', function() {
      $('#js-preloader').addClass('loaded');
  });
  var img_urls = [
    '/assets/images/about-bg.jpg',
    '/assets/images/about-right-dec.png',
    '/assets/images/client-bg.png',
    '/assets/images/client-image.png',
    '/assets/images/eval-01.png',
    '/assets/images/footer-bg.png',
    '/assets/images/heading-line-dec.png',
    '/assets/images/logo.png',
    '/assets/images/pricing-table-01.png',
    '/assets/images/pricing-table-02.png',
    '/assets/images/pro-table-bottom.png',
    '/assets/images/pro-table-top.png',
    '/assets/images/quote.png',
    '/assets/images/regular-table-bottom.png',
    '/assets/images/regular-table-top.png',
    '/assets/images/service-bg.jpg',
    '/assets/images/service-icon-01.png',
    '/assets/images/service-icon-02.png',
    '/assets/images/service-icon-03.png',
    '/assets/images/service-icon-04.png',
    '/assets/images/service-icon-hover-01.png',
    '/assets/images/service-icon-hover-02.png',
    '/assets/images/service-icon-hover-03.png',
    '/assets/images/service-icon-hover-04.png',
    '/assets/images/services-left-dec.png',
    '/assets/images/services-right-dec.png',
    '/assets/images/slider-dec.png',
    '/assets/images/slider-left-dec.png',
    '/assets/images/white-logo.png'
  ];
  var len = img_urls.length;
  var images = [];
  for (var i = 0; i < len; i++) {
    var img = new Image();
    img.src = img_urls[i];
    images.push(img);
  }
  // Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function() {
      if (width < 767) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }
})(window.jQuery);
