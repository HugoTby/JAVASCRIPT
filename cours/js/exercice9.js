// 9.1
function modification() {
    alert("Je vais modifier la div !");
    var modif = document.getElementsByName("LesDIV");

    modif.forEach(function(element) {
        element.innerHTML = "Hello";
    });
}


// 9.2

function modification2() {
    alert("Je vais modifier la div !");
    var modif = document.getElementsByTagName("div");

    for (var i = 0; i < modif.length; i++) {
        modif[i].innerHTML = "Hello";
    }
}

// 9.3

function modification3() {
    alert("Je vais modifier la div !");
    var modif = document.getElementsByClassName("LesDIVClass");
    
    for (var i = 0; i < modif.length; i++) {
        modif[i].innerHTML = "Hello";
    }
}
