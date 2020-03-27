$(document).ready(function () {
  let tabsItem = $('.tabs-item')

  tabsItem.on('click', function (e) {
    e.preventDefault();
    let activeContent = $(this).attr('href');
    $('.visible').toggleClass('visible animated fadeInRight faster');
    $(activeContent).toggleClass('visible animated fadeInRight faster');

    $('.tabs-item-active').toggleClass('tabs-item-active ');
    $(this).toggleClass('tabs-item-active')
  });
});