<?php

add_filter('timber/context', function ($context) {
  $context['site_icon'] = get_site_icon_url();
  $context['site_logo'] = get_stylesheet_directory_uri() . "/assets/img/logo.png";
  $context['book_icon'] = get_stylesheet_directory_uri() . "/assets/img/icon_book.png";
  $context['quill_icon'] = get_stylesheet_directory_uri() . "/assets/img/icon_quill.png";
  $context['miniature_icon'] = get_stylesheet_directory_uri() . "/assets/img/icon_miniature.png";
  $context['footer_texture'] = get_stylesheet_directory_uri() . "/assets/img/footer_texture.png";
  $context['default_hero'] = get_stylesheet_directory_uri() . "/assets/img/banner_default.jpg";
  $context['gif_loader'] = get_stylesheet_directory_uri() . "/assets/img/load.gif";
  $context['forum_icon'] = get_stylesheet_directory_uri() . "/assets/img/bird_icon.png";
  $context['languages'] = pll_the_languages(array('raw' => 1));

  return $context;
});