<?php
$context = Timber::context();
$context['post'] = new Timber\Post();

$context['factions'] = get_posts(array(
  'post_type' => 'faction',
  'numberposts' => -1,
  'orderby' => "title",
  'order' => "ASC",
));

Timber::render('pages/page.twig', $context);
