<?php
$context = Timber::context();
$context['post'] = new Timber\Post();

$context['factions'] = get_posts(array(
  'post_type' => 'faction',
  'numberposts' => -1,
  'orderby' => "title",
  'order' => "ASC",
));

$context['scrolls'] = get_posts(array(
  'post_type' => 'scroll',
  'numberposts' => 5,
  'orderby' => "title",
  'order' => "DESC",
));

$context['scroll_archive'] = get_post_type_archive_link('scroll');

Timber::render('pages/page.twig', $context);
