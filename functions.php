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
// Add BEM-style classes to menus
require_once($base_dir . '/inc/add_bem_menu_classes.php');
// Extend Twig-functionality
require_once($base_dir . '/inc/extend_twig.php');