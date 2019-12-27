<?php
$context = Timber::context();
$context['post'] = new Timber\Post();

$context['nav'] = wp_nav_menu(array(
  'menu' => 'headerMenuLocation',
  'echo' => false,
  'container' => '',
  'menu_class' => 'main-nav'
  )
);

Timber::render('pages/index.twig', $context);