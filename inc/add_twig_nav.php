<?php
/* Registrer menyene som vanlig: */
register_nav_menus(array(
  'headerMenuLocation' => 'Header Menu Location',
  'footerMenuLocation' => 'Footer Menu Location'
  )
);

/* Add menu to the global Twig scope  */
function add_nav_to_context( $context ) {
  // Instantiate a new Timber\Menu object
  $context['mainNav'] = new Timber\Menu('headerMenuLocation');
  $context['footerNav'] = new Timber\Menu('footerMenuLocation');
  return $context;
} add_filter( 'timber/context', 'add_nav_to_context' );
