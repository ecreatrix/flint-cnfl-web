<?php $current_lang = $_GET['lang'] ?? 'en';
$other_lang         = 'en' == $current_lang ? 'fr' : 'en'?>
<li>
  <wa-button-group>
    <wa-button variant="primary" data-onclick="lang=<?php echo $other_lang; ?>"><?php echo strtoupper( $other_lang ); ?></wa-button>
  </wa-button-group>
</li>