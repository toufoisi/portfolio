$(function(){
  $('.menu-trigger').on('click', function() {
    $(this).toggleClass('active');
    return false;
  });
  $('.menu-trigger').on('click', function(){
    $('#navigation').fadeToggle(600);
  });
});
