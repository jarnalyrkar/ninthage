<?php

/**
 * Create custom post type for The Ninth Scroll
 */
function scroll_post_type() {
  register_post_type('scroll', array(
    'name' => 'Scrolls',
    'singular_name' => 'Scroll',
    'public' => true,
    'label' => '9th Scroll',
    'supports' => array('title', 'editor', 'page-attributes'),
    'has_archive' => true,
  ));
}

add_action('init', 'scroll_post_type');
