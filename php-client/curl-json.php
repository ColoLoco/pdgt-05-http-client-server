<?php
// Inizializza la richiesta HTTP tramite CURL
$handle = curl_init('http://jsonplaceholder.typicode.com/posts');

// Richiedi la risposta HTTP come stringa
curl_setopt($handle, CURLOPT_RETURNTRANSFER, true);

// Esegui la richiesta HTTP
$response = curl_exec($handle);

// Estrai il codice di risposta (HTTP status)
$http_code = intval(curl_getinfo($handle, CURLINFO_HTTP_CODE));

if($http_code == 200) {
    // Risposta OK
    $data = json_decode($response);
    print_r($data);
}
else {
    // Qualche errore
    echo "Qualcosa non ha funzionato! #{$http_code}" . PHP_EOL;
}
