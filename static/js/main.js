jQuery( document ).ready(function( $ ) {

"use strict";

// Initiate the wowjs
// new WOW().init();

// Header on Scroll
$(function () {
  $(window).scroll( function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
      $(".header-area").addClass("background-header");
    } 
    else {
      $(".header-area").removeClass("background-header");
    }
  }); 
});
window.addEventListener('load', function(){
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
      $(".header-area").addClass("background-header");
    }
});

// Menu Dropdown Toggle
if($('.menu-trigger').length){
  $(".menu-trigger").on('click', function() { 
    $(this).toggleClass('active');
    $('.header-area .nav').slideToggle(200);
  });
}

});

