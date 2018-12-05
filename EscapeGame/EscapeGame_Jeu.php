
<?php
    $link = mysqli_connect('localhost','root','','projetweb');

    if (!$link){
        die('Erreur de connexion');
    }
    mysqli_set_charset($link, "utf8");
    $pseudo = $_GET['pseudo'];
    $verif = "SELECT * FROM joueur";
    if ($result = mysqli_query($link, $verif)){
        while ($ligne = mysqli_fetch_assoc($result)){
            $liste_pseudo[] = $ligne['pseudo'];
        }
    }
    // Crée une liste avec tous les pseudos déjà existants. //
    if (!in_array($pseudo,$liste_pseudo) and !empty($pseudo)){
        $sql_pseudo = "INSERT INTO joueur (pseudo) VALUES ('$pseudo')";
        $result = mysqli_query($link, $sql_pseudo);
    }
    // Rajoute dans la base de donnée le pseudo inscrit par l'utilisateur sauf si celui-ci est déjà présent et sauf si il est vide. //


    $sql_objets = "SELECT * FROM objets";
    if ($result = mysqli_query($link, $sql_objets)){
        while ($ligne = mysqli_fetch_assoc($result)){
            $truc[] = $ligne;
       };
       echo json_encode($truc,JSON_NUMERIC_CHECK);
    };
    // On envoie dans le fichier EscapeGame.js tous les objets qui sont présent dans notre base de donnée. //

    $score = $_GET['score'];
    $sql_score = "UPDATE `joueur` SET `score`='$score' WHERE pseudo ='$pseudo'";
    if($result = mysqli_query($link,$sql_score)){
    };
    // On ajoute le score du joueur ou on modifie si celui-ci avait déjà joué et rentré le même pseudo. //
    

?>
