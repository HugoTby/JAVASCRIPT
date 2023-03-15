<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" media="screen" href="../css/exercice10.css">
    <title>Document</title>
</head>
<body>
    <style>.Div1{display: flex;justify-content: center;align-items: center;gap: 1em;}input{margin: 2px;}</style>
    <h1 style="text-align: center;color:black">Cours sur les API</h1>

    <div class="Div1">
        <div id="divD" onclick="api();" style="border-radius:10px;color:white;background-color:red">
            Hello World !
        </div> 

        <div class="divD"  style="border-radius:10px;color:white;background-color:red">
        <form method="post" >
            <label>Send an API request</label>
            <input id="val1" type="text" placeholder="Saisissez une valeur 1" name="valeur1" value=""  required>
            <input id="val2" type="text" placeholder="Saisissez une valeur 2" name="valeur2" value=""  required>
            <input type="submit">
        </form>
        </div> 
        
    </div>

    <script type="text/javascript" src="main.js"></script>
</body>
</html> 
