<?php

$base_dir = get_stylesheet_directory();
// Enqueue dist/css and dist/js
//   do not change this without also changing gulpfile.js and webpack.config.js to match
require_once($base_dir . '/inc/enqueue_scripts.php');
// Remove emojis
require_once($base_dir . '/inc/disable_emojis.php');
// Remove jquery by default
require_once($base_dir . '/inc/deregister_jquery.php');
// Add markup to allow for responsive oembeds
require_once($base_dir . '/inc/add_responsive_embed.php');
// Disable theme editor
require_once($base_dir . '/inc/disable_theme_editor.php');
// Extend Twig-functionality
require_once($base_dir . '/inc/extend_twig.php');
// Add theme assets
require_once($base_dir . '/inc/add_theme_assets.php');
// Add Twig-navigation
require_once($base_dir . '/inc/add_twig_nav.php');
// Disable gutenberg
require_once($base_dir . '/inc/disable_gutenberg.php');
// Enable thumbnails
require_once($base_dir . '/inc/enable_thumbnails.php');
// Create a Custom Post Type for Factions
require_once($base_dir . '/inc/create_faction_cpt.php');
// Create a Custom Post Type for Downloads
require_once($base_dir . '/inc/create_downloads_cpt.php');
// Disable comments
require_once($base_dir . '/inc/disable_comments.php');