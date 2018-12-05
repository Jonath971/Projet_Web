<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Escape Game : HallOfFame</title>
    <link rel="stylesheet"  href="HallOfFame.css">
</head>
<body>
<div id="titre">
    <p>Hall Of Fame</p>
</div>
<?php
$link = mysqli_connect('localhost', 'root', '', 'projetweb');

if (!$link) {
  die('Erreur de connexion');
} else {
  //echo 'Succès... ';
}
?>
<?php
        $requete = "SELECT pseudo, score FROM joueur ORDER BY  score  ASC LIMIT 10";
        $pseudo = [];
        $score = [];
        if ($result = mysqli_query($link, $requete)) {

            while ($ligne = mysqli_fetch_assoc($result)) {
                if (in_array($ligne["pseudo"], $pseudo)){
                }
                else{
                    $pseudo [] = $ligne["pseudo"];
                }
                if  (in_array($ligne["score"], $score)){
                }
                else{
                    $score [] = $ligne["score"];
                }
            }
        }
        else {
        echo "Erreur de requête de base de données.";
        }
        // On récupère tous les pseudos et leurs scores dans la base de donnée 'joueur' et on classe les 10 meilleurs joueurs. //

        $len = sizeof($pseudo);
    ?>
<table  BORDER = 1 id="tableau">
                
<?php
for ($i = 0; $i < $len; $i++) {
?>
<tr>
    <?php
    $j=$i+1;
    echo "<td>  $j </td>";
    echo "<td> $pseudo[$i] </td>";
    echo "<td> $score[$i] </td>";
    ?>
</tr>
<?php
}
?>

</table>

<div id="boutons">
    <a href="page_accueil.html" title="page_accueil"><input type="button" value="Retour" class="boutonexit"></a>
    
    <a href="EscapeGame_Jeu.html" title="jouer"><input type="button" value="Essayer de battre <?php echo $pseudo[0]?>" class="boutonplay"></a>
    <!--Dans le bouton essayer de me battre on affiche le pseudo ayant le meilleur score -->      
</div>
</body>
</html>