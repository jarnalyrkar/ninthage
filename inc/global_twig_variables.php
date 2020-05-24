<?php

add_filter('timber/context', function ($context) {
  $context['site_icon'] = get_site_icon_url();
  $context['site_logo'] = get_stylesheet_directory_uri() . "/assets/img/logo.png";
  $context['languages'] = pll_the_languages(array('raw' => 1));
  $context['book_icon'] = get_stylesheet_directory_uri() . "/assets/img/icon_book.png";
  $context['quill_icon'] = get_stylesheet_directory_uri() . "/assets/img/icon_quill.png";
  $context['miniature_icon'] = get_stylesheet_directory_uri() . "/assets/img/icon_miniature.png";
  return $context;
});