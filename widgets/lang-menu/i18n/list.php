<?php
header('Content-Type: application/json; charset=utf-8');

// Should be $_SERVER as it is async PHP script (not WP) and it is needed only for AJAX requests
$url = str_replace('list.php', '', $_SERVER['PHP_SELF']) . 'translates/';

$arr = array(
    array('lang' => 'en', 'flag' => 'gb', 'name' => 'English', 'translation' => $url . 'en.json'),
    array('lang' => 'es', 'flag' => 'es', 'name' => 'Española', 'translation' => $url . 'es.json'),
    array('lang' => 'ru', 'flag' => 'ru', 'name' => 'Русский', 'translation' => $url . 'ru.json'),
);

echo json_encode($arr, JSON_UNESCAPED_SLASHES);
