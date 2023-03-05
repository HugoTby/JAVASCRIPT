// const fetchResponsePromise = fetch("http://127.0.0.1/JAVASCRIPT/cours/json/exercice11.json",{method: 'GET'});
// const PromiseJson = fetchResponsePromise.then(response => response.json())
// const ResponsePromise = PromiseJson.then(response2 => console.log(JSON.stringify(response2)))
// PromiseJson.catch(error => VideoColorSpace.log("Le serveur à renvoyé l'erreur : "+ error))

// ou sous une forme factorisée :

fetch(
    "http://127.0.0.1/JAVASCRIPT/cours/json/exercice11.json",
    {method: 'GET'}
).then(
    response => response.json()
).then(
    response2 => console.log(JSON.stringify(response2))
).catch(error => console.log("Le serveur à renvoyé l'erreur : "+ error));



//get element by id L-14 + récup de div


/*

Activer le mode $a2enmod headers

Ajouter dans apache2.conf directory :

<Directory /var/www/>
Options Indexes FollowSymLinks
AllowOverride None
Require all granted
Header set Access-Control-Allow-Origin "*"
</Directory>


*/
