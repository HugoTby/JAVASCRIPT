<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="ex5.js"></script>
    <title>Document</title>
</head>
<body>
    

<h1 style="text-align: center;color:orange">Cours sur le JavaScript</h1>
<br>
<br>

<script>
    var number = prompt("Veuillez saisir un chiffre :\n");
    var multiplication = 0;

    for (var a = 1; a <= number; a++) {

        multiplication = multiplication * number;
    }

    alert(multiplication);

</script>

</body>
</html>