<?php

/**
 * Create custom taxonomy for book categories
 */
add_action('init', 'add_custom_taxonomies', 0);
function add_custom_taxonomies()
{
  // Add new "Locations" taxonomy to Posts
  register_taxonomy('book_category', 'faction', array(
    'labels' => array(
      'name' => 'Categories',
      'singular_name' => 'Category'
    ),
  ));
}


/**
 * Create custom post type for Downloads
 */
add_action('init', 'download_post_type');

function download_post_type() {
  register_post_type('downloads', array(
    'name' => 'Downloads',
    'singular_name' => 'Download',
    'public' => true,
    'label' => 'Downloads',
    'taxonomies' => array('book_category'),
    'supports' => array('title', 'editor', 'page-attributes'),
  ));
}
