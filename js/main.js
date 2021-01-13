$(function(){
  'use strict';
$('.dropdown-menu .dropdown-item').click(function(){
  var visibleItem=$('.dropdown-toggle',$(this).closest('.dropdown'));
  visibleItem.text($(this).attr('value'));
});
var nav=0;
var name= ['東京','大阪','沖縄','北海道'];
// var room= ['まるまる貸切','個室','シェアルーム'];
// var guest= ['ゲスト1人','ゲスト2人','ゲスト3人','ゲスト4人','ゲスト5人','ゲスト6人',
// 'ゲスト7人','ゲスト8人','ゲスト9人','ゲスト10人','ゲスト11人','ゲスト12人','ゲスト13人',
// 'ゲスト14人','ゲスト15人','ゲスト16人','ゲスト17人',];
$('#tokyo1').autocomplete({
  source: name,
  autoFocus: true,
    delay: 500,
    minLength: 0
});
var fix=$('.why-text').offset().top;
var end=$('.aboutmore').offset().top;
var fox=0;
  $(window).on('scroll',function(){
    fox=$(this).scrollTop();
  if(fox >= fix){
    $('.header-sp').show();
    $('.footer-sp').show();
  }else{
    $('.header-sp').hide();
    $('.footer-sp').hide();
  }
  if(fox >= end){
    $('.footer-sp').hide();
  }
});
  $(window).on('load',function(){
    if(window.matchMedia('(min-width:1129px)').matches){
      $('.header-sp').hide();
      $('.footer-sp').hide();
    }});

$('.navbar-toggler-icon').click(function(){
  if(nav==0){
    $(this).addClass('ac');
    $('.sp-img').hide();
    $('.white').show();
    $('html').css({overflow: 'hidden'});
    $('.pc-img').show();

    nav=1;
  }else if(nav==1){
    $('.pc-img').hide();
    $('.white').hide();
    $(this).removeClass('ac');
    $('html').css('overflow-y','auto');
    $('.sp-img').show();
    nav=0;
  }});
});
