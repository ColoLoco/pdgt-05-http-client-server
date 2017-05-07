# Server HTTP con NodeJS ed Express

[NodeJS](https://nodejs.org) è un runtime JavaScript basato sull’interprete V8 di Google Chrome. Permette di sviluppare diverse tipologie di applicazioni, ma è spesso utilizzato per lo sviluppo di applicazioni web lato server.
Tramite il suo “package manager” NPM, è possibile sfruttare un vasto numero di pacchetti pronti all’uso.
Ad esempio, il pacchetto [ExpressJS](http://expressjs.com/), che permette di sviluppare rapidamente dei servizi web RESTful.

## Installazione e setup

Dopo aver installato [NodeJS](https://nodejs.org), assicurarsi che i comandi `node` e `npm` funzionino da riga di comando.
Installare quindi il pacchetto [ExpressJS](http://expressjs.com/):

```
npm install express --save
```

Dopo l'installazione, sarà possibile realizzare un web server in pochissime righe di codice:

```
var express = require('express'); // Importa Express

var app = express(); // Crea applicazione

// Avvia il server
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Server up, listening at http://%s:%s", host, port)
})
```

È possibile registrare degli “handler” per vari path gestiti dal server, utilizzando il paradigma delle *callback* di Javascript.
Consultare `server-echo.js` per un esempio.

## Routing

Un web service RESTful deve poter rispondere in maniera diversa a diversi **verbi HTTP** (GET, POST, DELETE, ecc.). Express mette a disposizione diversi metodi per registrare più callback:

```
app.get('/', function (req, res) {
    console.log("GET /");
    res.send('Hello GET');
});
app.post('/', function (req, res) {
    console.log("POST /");
    res.send('Hello POST');
});
```

Utilizzando il carattere `*` nel *path*, è possibile specificare una qualsiasi sequenza di caratteri. Vedi `server-routing.js` per un esempio.

## Query string

Una parte importante (ed opzionale) di ogni URL è la *query string*, una sequenza di parametri che viene specificata nell'URL stesso, preceduto dal carattere `?`.
Ogni parametro è rappresentato da una coppia *nome* e *valore*.
In presenza di più parametri, ogni coppia è separata dal carattere `&`.
Ad esempio:

```
http://localhost:8081/query?name=mario
```

In questo caso il *path* sarà `query` e la *query string* conterrà il singolo parametro `name`.

Per interpretare questo tipo di parametri (e quindi rispondere dinamicamente alla richieste degli utenti), Express permette di usare il campo `query` dell'oggetto `request` passato alla *callback*.
Vedi `server-querystring.js`.

## Dati JSON

Per leggere dati dal *contenuto* della richiesta HTTP (il cosiddetto *body*), è necessario introdurre una seconda libreria:

```
npm install body-parser --save
```

Includendo la libreria, prima di avviare il server, è possibile fare in modo che tutti i dati in formato JSON (con un MIME-type `application/json`) vengano letti e resi disponibili tramite la proprietà `req.body`:

```
var bodyParser = require('body-parser');
app.use(bodyParser.json());
```

Vedi `server-json.js` per un esempio completo.

## Scrivere sul file system

È possibile scrivere dati su file utilizzando il pacchetto `fs`:

```
const fs = require('fs');
```

Vedi lo script `server-average.js` per un esempio di semplice API per la raccolta di voti ed il calcolo della media.
