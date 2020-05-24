<?php
// require_once 'add_breadcrumb.php';
// require_once 'phone_number_filter.php';
// require_once 'wpml_custom_switcher.php';

/*
 *  Import functions as above, and add them to the function below.
 *  This will add it to the global twig scope.
 */
function add_to_twig( $twig ) {
  // Add filters here:
  // $twig->addFilter(new Timber\Twig_Filter('phone', 'phone'));

  // Add functions:
  $twig->addFunction(new Timber\Twig_Function('pll__', 'pll__'));
  // $twig->addFunction(new Timber\Twig_function('language_switcher', 'language_switcher'));

  return $twig;
} add_filter( 'timber/twig', 'add_to_twig' );



