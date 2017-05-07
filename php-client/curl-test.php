<?php
// Inizializza la richiesta HTTP tramite CURL
$handle = curl_init('http://www.example.org');

// Richiedi la risposta HTTP come stringa
curl_setopt($handle, CURLOPT_RETURNTRANSFER, true);

// Esegui la richiesta HTTP
$response = curl_exec($handle);

// Estrai il codice di risposta (HTTP status)
$http_code = intval(curl_getinfo($handle, CURLINFO_HTTP_CODE));

echo "HTTP status: {$http_code}" . PHP_EOL;
echo "Response body " . strlen($response) . " bytes" . PHP_EOL;
