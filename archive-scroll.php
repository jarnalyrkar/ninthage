<?php
$context = Timber::context();
$context['posts'] = new Timber\PostQuery(array(
  'post_type' => 'scroll',
  'order' => 'DESC',
  'orderby' => 'title',
  'posts_per_page' => -1,
));

Timber::render('pages/archive-scroll.twig', $context);