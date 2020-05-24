<?php
/**
 * Create custom post type for Factions
 */
add_action('init', 'faction_post_type');

function faction_post_type() {
  register_post_type('faction', array(
    'name' => 'Factions',
    'singular_name' => 'Faction',
    'public' => true,
    'label' => 'Factions',
    'supports' => array('title', 'editor', 'page-attributes'),
  ));
}