
//Fonction fermeture des menus après avoir cliqué 
$('.navbar-collapse .navbar-nav > .nav-item > .titi').click(function () {
    $('.collapse.show').removeClass('show').css('height', '0');
});
$('.navbar-collapse .navbar-nav > .nav-item > .dropdown-menu > .dropdown-item').click(function () {
    $('.collapse.show').removeClass('show').css('height', '0');
});
