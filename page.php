<?php
$context = Timber::context();
$context['post'] = new Timber\Post();
$context['languages'] = pll_the_languages(array('raw' => 1));

Timber::render('pages/page.twig', $context);
