<?php
function add_global_assets_to_context($context) {
  $context['site_logo'] = get_stylesheet_directory_uri() . "/assets/img/logo.png";

  return $context;
} add_filter('timber/context', 'add_global_assets_to_context');