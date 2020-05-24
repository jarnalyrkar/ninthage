<?php

/**
 * Create custom post type for Downloads
 */
function download_post_type()
{
  register_post_type('downloads', array(
    'name' => 'Downloads',
    'singular_name' => 'Download',
    'public' => true,
    'label' => 'Downloads',
    'supports' => array('title', 'editor', 'page-attributes'),
  ));
}
add_action('init', 'download_post_type');



/**
 * Create custom taxonomy for book categories
 */
function add_book_categories() {
  register_taxonomy('book_category', 'downloads', array(
    'hierarchical' => true,
    'labels' => array(
      'name' => 'Book Categories',
      'singular_name' => 'Book Category'
    ),
  ));
}
add_action('init', 'add_book_categories');

