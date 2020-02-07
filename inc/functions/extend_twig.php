<?php

/*
 *  I denne funksjonen legger du til funksjoner og filter som du ønsker
 *  Selve funksjonene som du kaller kan du definere utenfor.
 */
function add_to_twig( $twig ) {
  // Du kan legge til filter
  $twig->addFilter( new Timber\Twig_Filter( 'phone', 'phone' ) );

  // Du kan legge til funksjoner:
  // $twig->addFunction( new Timber\Twig_Function( 'edit_post_link', 'edit_post_link' ) );

  return $twig;
} add_filter( 'timber/twig', 'add_to_twig' );

/* Brukes f.eks {{ post.phone_number|phone }} */
function phone( $number ) {
  $number = str_replace(' ', '', $number);
  if (substr($number, 0, 1) == 4 || (substr($number, 0 , 1) == 9)) {
    return substr($number, 0, 3) . " " . substr($number, 2, 2) . " " . substr($number, 4, 3);
  }
  return substr($number, 0, 2) . " " . substr($number, 2, 2) . " " . substr($number, 4, 2) . " " . substr($number, 6, 2);
}
