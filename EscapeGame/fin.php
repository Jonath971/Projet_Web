<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Escape Game: Fin</title>
    <link rel="stylesheet"  href="fin.css">
</head>
<body>
<div id="titre">
    <p>Félicitations !</p>
</div>
    <?php
    echo "<div id='Resultat'>";
    $link = mysqli_connect('localhost', 'root', '', 'projetweb');

    if (!$link) {
      die('Erreur de connexion');
    }

    $sql = "SELECT * FROM joueur ORDER BY id_joueur DESC LIMIT 1";
    if ($result = mysqli_query($link, $sql)){
        while ($ligne = mysqli_fetch_assoc($result)){
            $pseudo = $ligne['pseudo'];
            $score = $ligne['score'];
       };
       // Récuperation du pseudo et score du l'utilisateur pour afficher son résultat. //
       
       echo "<p>";
       echo "<img id='img_prisonnie'r src='prisonnier.png' width=200 height=200>";
       echo "</p>";
       echo "<p>";
       echo "Bravo $pseudo, vous avez réussi à emprisonner le voleur au bout de $score secondes."; 
       echo "</p>";

       echo "<p>";
       echo "Jeanine vous remercie du fond du coeur !";
       echo "</p>";
    };
    echo "</div>";
    ?>

<div id="boutons">
    <a href="page_accueil.html" title="page_accueil"><input type="button" value="Retour" class="boutonexit"></a>
    <a href="halloffame.php" title="halloffame"><input type="button" value="Etes vous dans le Hall oh Fame ?" class="boutonhof"></a>
    <a href="EscapeGame_Jeu.html" title="rejouer"><input type="button" value="Essayer de battre mon score" class="boutonplay"></a>      
</div>   
</body>
</html>
