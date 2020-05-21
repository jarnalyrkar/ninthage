<?php
function language_switcher() {
  $languages = apply_filters('wpml_active_languages', NULL, array('skip_missing' => 0, 'link_empty_to' => 'http://domain.com/missing-translation-contact-form'));

  if (!empty($languages)) {
    echo "<ul>";
    foreach ($languages as $language) {
      $native_name = $language['active'] ? strtoupper($language['native_name']) : $language['native_name'];

      if (!$language['active']) {
        echo '<li><a href="' . esc_url($language['url']) . '">';
      }

      echo esc_html($native_name) . ' ';

      if (!$language['active']) {
        echo '</a></li>';
      }
    }
    echo "</ul>";
  }
}