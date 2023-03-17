function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.burger-menu_button', '.burger-menu_lines');
  let links = menu.find('.burger-menu_link');
  let overlay = menu.find('.burger-menu_overlay');
  
  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
  
  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());
  
  function toggleMenu(){
    menu.toggleClass('burger-menu_active');
    
    if (menu.hasClass('burger-menu_active')) {
      $('body').css('overlow', 'hidden');
    } else {
      $('body').css('overlow', 'visible');
    }
  }
}

burgerMenu('.burger-menu');




$('.btn-book').on('click', function(){
  $('.wrapper-modal').fadeIn();
})
$('.btn-book').on('click', function(){
  $('.wrapper-modal').addClass('active')
})
$('.form-order').on('click', function(){
  $('.wrapper-modal').fadeOut();
})

$('.overlay').on('click', function(){
  $('.wrapper-modal').fadeOut();
})

$('.form-order').children().on('click', function(e){
  e.stopPropagation();
})

$('.modal-close').on('click', function(){
  $('.wrapper-modal').hide();
})

$('.overlay').on('click', function(){
  $('.wrapper-modal').hide();
})
