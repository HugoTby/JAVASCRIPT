
// Exercie 3

var MaDiv = document.getElementById("divD");
/*
function api() {
    fetch('api.php').then((resp) => resp.json())
        .then(function (data) {
            
            console.log(data[0]);
            MaDiv.innerHTML = data;
            
        })
        .catch(function (error) { 
            console.log(error);
        });
}


// Exercie 4


setInterval(function() {
    fetch('api.php').then((resp) => resp.json())
        .then(function (data) {
            console.log(data[0]);
            MaDiv.innerHTML = data;
        })
        .catch(function (error) {
            console.log(error);
        });
}, 2000);


// Exercie 5

function api() {
    
    
    fetch('api.php?key1="test1"&key2="test2"',{
        
            method: 'GET'
        })
        .then((resp) => resp.json()).then(function (data) {
            
            console.log(data);
            MaDiv.innerHTML = data;
            
        })
        .catch(function (error) { 
            console.log(error);
        });

}
*/

var valeur1 = document.getElementById("val1").value;
var valeur2 = document.getElementById("val2").value;


function api() {
    
    
    fetch('api.php?key1='+valeur1+'&key2='+valeur2+'',{
        
        method: "POST",

        headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
        body: JSON.stringify({
          key1: 1,
          key2: "Fix my bugs",
        })


        })
        .then((resp) => resp.json()).then(function (data) {
            
            console.log(data);
            MaDiv.innerHTML = data;
            
        })
        .catch(function (error) { 
            console.log(error);
        });

}


