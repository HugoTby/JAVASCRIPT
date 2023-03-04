function modification() {
    alert("Je vais modifier la div !");
    var modif = document.getElementsByName("LesDIV");

    for (var i = 0; i < modif.length; i++) {
        modif[i].innerHTML = "Hello";
    }
    return "Hello";
}