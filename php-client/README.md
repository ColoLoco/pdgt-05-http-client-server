# Richieste HTTP in PHP tramite cURL

La libreria [cURL](https://curl.haxx.se) è uno strumento da riga di comando ed una libreria versatile per effettuare richiesta HTTP (lato client).
È disponibile anche da linguaggio PHP, tramite delle funzioni imperative semplificate.

* ```curl-test.php```: Script di esempio che fa uso di cURL per scaricare una risorsa remota tramite HTTP. Il codice di risposta (_HTTP status code_) viene estratto e visualizzato, assieme al numero di byte del documento trasmessi.
* ```curl-json.php```: Semplice script che fa uso di cURL per accedere all’*end-point* di un web service. Viene effettuato il *parsing* dei dati (in formato [JSON](http://json.org/)) e la struttura viene stampata su console.
