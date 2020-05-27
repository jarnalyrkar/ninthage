<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://www.the-ninth-age.com/community/index.php?board-list/");
curl_setopt($ch, CURLOPT_HEADER, 0);

$result = curl_exec($ch);
curl_close($ch);

echo json_encode($result);
