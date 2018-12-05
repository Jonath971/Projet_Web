
var pseudo = prompt('Pseudo :')
if (pseudo == ''){
    pseudo = prompt('Entrez un Pseudo valide !')
}
// On demande le pseudo du joueur. //

var mymap = L.map('mapid').setView([48.841023,2.5851349], 13); 
// On crée la map qu'on utilisera pour l'escapegame et on la centre sur l'ENSG qui est le lieu du braquage. //

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var marker = L.marker([48.841023,2.5851349]).addTo(mymap);
marker.bindPopup(" <b>Braquage chez Jeanine:</b>Le voleur a marché dans du café en prenant la fuite. Suivez ses empreintes pour retrouver sa planque.<br>").openPopup();

var popup = L.popup()

var bounds1 = L.latLngBounds([[ 48.84, 2.58], [ 48.85, 2.59]]);
var overlay1 = L.imageOverlay( 'sticker-traces-de-pas.jpg', bounds1).addTo(mymap);
// On affiche la première trace de pas. //

var codeconnu=0;
var inventaire = [1];
var recup=[];
var score = 0;

var t1 = new Date();
var debut = t1.getTime();
// On recupere le temps au lancement du jeu qui nous permettra de determiner le score (temps mis par le jour pour finir l'escapgame). //

/**
La fonction Enigme_1 permet de résoudre "la 1ère énigme".
Qui consiste à afficher les traces de pas du voleur et la maison où il vivait.
 */
function Enigme_1(e) {

    var lat = e.latlng.toString().substring(7,26).split(',')[0];
    var lon = e.latlng.toString().substring(7,26).split(',')[1];
    var ajax = new XMLHttpRequest();
    ajax.open('GET', 'EscapeGame_Jeu.php?pseudo='+pseudo+'&score='+score,true);
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    ajax.addEventListener('load',  function () { 
    var test = JSON.parse(ajax.response)
  
    if ( 48.842 < lat & lat < 48.848 & 2.5815 < lon & lon < 2.588){
            for (var i = 0; i < 2; i++){
                if (inventaire.indexOf(test[i].bloque_id) == (inventaire.length - 1) & inventaire.length == 1){
                    
                    var bordure1_lat = test[i].bordure_1_lat;
                    var bordure1_lon = test[i].bordure_1_lon;
                    var bordure2_lat = test[i].bordure_2_lat;
                    var bordure2_lon = test[i].bordure_2_lon;

                    var bounds = L.latLngBounds([ bordure1_lat, bordure1_lon], [ bordure2_lat, bordure2_lon]);
                    var overlay = L.imageOverlay( test[i].url, bounds);
                    overlay.addTo(mymap);
                    // On ajoute la deuxième trace de pas lorsqu'on clique sur la première. //

                    inventaire.push(test[i].id)
                    
                    break;
                    }
                else{
                    continue;
                }
            }

        }

    if ( 48.852 < lat & lat < 48.858 & 2.5815 < lon & lon < 2.588){
            for (var i = 0; i < test.length; i++){
                if (inventaire.indexOf(test[i].bloque_id) == (inventaire.length - 1) & inventaire.length == 2){
                    var bordure1_lat = test[i].bordure_1_lat;
                    var bordure1_lon = test[i].bordure_1_lon;
                    var bordure2_lat = test[i].bordure_2_lat;
                    var bordure2_lon = test[i].bordure_2_lon;

                    var bounds = L.latLngBounds([ bordure1_lat, bordure1_lon], [ bordure2_lat, bordure2_lon]);
                    var overlay = L.imageOverlay( test[i].url, bounds);
                    overlay.addTo(mymap);
                    // On ajoute la troisième trace de pas lorsqu'on clique sur la deuxième. //

                    inventaire.push(test[i].id)

                    break;
                    }
                else{
                    continue;
                }
            }
        }

    if ( 48.862 < lat & lat < 48.868 & 2.5815 < lon & lon < 2.588){
            for (var i = 0; i < test.length; i++){
                if (inventaire.indexOf(test[i].bloque_id) == (inventaire.length - 1) & inventaire.length == 3){
                    var bordure1_lat = test[i].bordure_1_lat;
                    var bordure1_lon = test[i].bordure_1_lon;
                    var bordure2_lat = test[i].bordure_2_lat;
                    var bordure2_lon = test[i].bordure_2_lon;

                    var bounds = L.latLngBounds([ bordure1_lat, bordure1_lon], [ bordure2_lat, bordure2_lon]);
                    var overlay = L.imageOverlay( test[i].url, bounds);
                    overlay.addTo(mymap);
                    // On ajoute la quatrième trace de pas lorsqu'on clique sur la troisième. //

                    inventaire.push(test[i].id)

                    }
                else{
                    continue;
                }
            }
       }

       if ( 48.872 < lat & lat < 48.878 & 2.5815 < lon & lon < 2.588){
            for (var i = 0; i < test.length; i++){
                if (inventaire.indexOf(test[i].bloque_id) == (inventaire.length - 1) & inventaire.length == 4){
                    var bordure1_lat = test[i].bordure_1_lat;
                    var bordure1_lon = test[i].bordure_1_lon;
                    var bordure2_lat = test[i].bordure_2_lat;
                    var bordure2_lon = test[i].bordure_2_lon;

                    var bounds = L.latLngBounds([ bordure1_lat, bordure1_lon], [ bordure2_lat, bordure2_lon]);
                    var overlay = L.imageOverlay( test[i].url, bounds);
                    overlay.addTo(mymap);
                    // On ajoute la maison où on est sensé retrouve le voleur, cell-ci apparrait lorsqu'on clique sur la dernière trace de pas. //

                    inventaire.push(test[i].id)

                    }
                else{
                    continue;
                }
            }
       }
    
    });

    ajax.send();
}
mymap.on('click', Enigme_1);

/**
La fonction Enigme_2 permet de résoudre "la 2ème énigme".
Trouver la planque de sa nouvelle maison.
 */
function Enigme_2(e){

    var lat = e.latlng.toString().substring(7,26).split(',')[0];
    var lon = e.latlng.toString().substring(7,26).split(',')[1];

    var ajax = new XMLHttpRequest();
    ajax.open('GET', 'EscapeGame_Jeu.php?pseudo='+pseudo+'&score='+score,true);
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    ajax.addEventListener('load',  function () { 
    var test = JSON.parse(ajax.response)

    if ( 48.88 < lat & lat < 48.885 & 2.58 < lon & lon < 2.59 & inventaire.length == 5){
        popup
        .setLatLng(e.latlng)
        .setContent("<b>Le braqueur a laissé une lettre:</b><br>Chérie je dois me cacher quelque temps loin d'ici. Si tu veux me contacter, envoie une lettre à l'hotel près de l'aéroport El Dorado de la capitale du pays entouré par l'Equateur et le Venezuela.")
        .openOn(mymap);

        var bordure1_lat = test[5].bordure_1_lat;
        var bordure1_lon = test[5].bordure_1_lon;
        var bordure2_lat = test[5].bordure_2_lat;
        var bordure2_lon = test[5].bordure_2_lon;

        var bounds = L.latLngBounds([ bordure1_lat, bordure1_lon], [ bordure2_lat, bordure2_lon]);
        var overlay = L.imageOverlay( test[5].url, bounds);
        overlay.addTo(mymap);
        // On affiche l'endroit où s'est refugié le vouleur. //

        inventaire.push(test[5].id)
        }
    
    

});

ajax.send();
}
mymap.on('click', Enigme_2);


/**
La fonction Enigme_3 permet de résoudre "la 3ème énigme".
Donner la pizza au concièrge pour récuperer un code permettant de rentrer dans la chambre du voleur.
 */
function Enigme_3(e){

    var lat = e.latlng.toString().substring(7,26).split(',')[0];
    var lon = e.latlng.toString().substring(7,26).split(',')[1];

    var ajax = new XMLHttpRequest();
    ajax.open('GET', 'EscapeGame_Jeu.php?pseudo='+pseudo+'&score='+score,true);
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    ajax.addEventListener('load',  function () {
    var test = JSON.parse(ajax.response)
    
    if ( 4.67 < lat & lat < 4.68 & -74.15 < lon & lon < -74.14 & inventaire.length == 6){
        popup
        .setLatLng(e.latlng)
        .setContent("<b>Concierge de l'hotel:</b><br>Humm oui un français est arrivé à l'hotel hier soir mais je n'arrive plus à me rappeler dans quelle chambre il loge. Peut être que si vous m'achetiez une pizza dans la rue d'en face, j'arriverai à retrouver la mémoire... ")
        .openOn(mymap);
        

        var bordure1_lat = test[6].bordure_1_lat;
        var bordure1_lon = test[6].bordure_1_lon;
        var bordure2_lat = test[6].bordure_2_lat;
        var bordure2_lon = test[6].bordure_2_lon;

        var bounds_pizzeria = L.latLngBounds([ bordure1_lat, bordure1_lon], [ bordure2_lat, bordure2_lon]);
        var overlay_pizzeria = L.imageOverlay( test[6].url, bounds_pizzeria);
        overlay_pizzeria.addTo(mymap);
        inventaire.push(test[6].id)
       
        }

    if ( 4.67 < lat & lat < 4.68 & -74.13 < lon & lon < -74.12 & inventaire.length == 7 & recup.length == 0){
            
            popup
            .setLatLng(e.latlng)
            .setContent("<br>Ramenez la pizza au concierge</br>")
            .openOn(mymap);
            recup.push("pizza");


            document.getElementById('inventaire_suspects').style.borderStyle="solid";
            document.getElementById('inventaire_suspects').style.borderColor="black";
            document.getElementById('inventaire_suspects').style.borderWidth="2px";
            document.getElementById('inventaire_suspects').style.height="100px";
            document.getElementById('inventaire_suspects').style.color="rgb(211, 150, 80)";
            document.getElementById('inventaire_suspects').style.textShadow="-1.5px 0 black, 0 1.5px black, 1.5px 0 black, 0 -1.5px black";
            document.getElementById('inventaire_suspects').style.fontfamily="fantasy";
            document.getElementById('inventaire_suspects').style.fontSize="20px";
            // On crée le CSS pour la div inventaire_suspects en fontion de ce qu'il y a l'interieur. //

            document.getElementById('inventaire_suspects').innerHTML = "<img id='pizza' src='pizza.jpg' width=100 height =100 style='z-index:1'>";
            // On affiche la pizza dans l'inventaire_suspects pour que l'utilisateur sache qu'il là possède. //
        
        }
    
    if ( 4.67 < lat & lat < 4.68 & -74.15 < lon & lon < -74.14 & recup.indexOf('pizza') != -1){

        popup
            .setLatLng(e.latlng)
            .setContent("<b>Concierge</b><br>Miam miam ! Quelle délicieuse pizza ! Je ne me souviens plus trop du code la chambre mais je sais que cette équation le donne : 7x + 5 = 10-3x </br><br>Rentrez le bon code dans le boitier à droite puis recliquez sur l'hotel pour rentrer dans la chambre du voleur</br>")
            .openOn(mymap);
        recup.pop();

        document.getElementById('inventaire_suspects').style.height="30px";
        // On modifie la taille du CSS d'inventaire_suspects. //

        document.getElementById('inventaire_suspects').innerHTML = "Code ==> 7x + 5 = 10-3x";
        // On affiche le code dans l'inventaire_suspects pour que l'utilisateur ne l'oublit pas. //
        
        

        codeconnu=1;

        var bordure1_lat = test[10].bordure_1_lat;
        var bordure1_lon = test[10].bordure_1_lon;
        var bordure2_lat = test[10].bordure_2_lat;
        var bordure2_lon = test[10].bordure_2_lon;

        var bounds_serrure = L.latLngBounds([ bordure1_lat, bordure1_lon], [ bordure2_lat, bordure2_lon]);
        var overlay_serrure = L.imageOverlay( test[10].url, bounds_serrure);
        overlay_serrure.addTo(mymap);
        inventaire.push(test[10].id)

    }

    if ( 4.67 < lat & lat < 4.675 & -74.14 < lon & lon < -74.135 & inventaire.length == 8 & recup.length == 0 & codeconnu == 1  ){
        var code =  prompt("Veuillez entrez la réponse à l'équation");
        while (parseFloat(code) != 0.5 ){
            code = prompt("Ce n'est pas la bonne réponse, faites tourner vos méninges ! !")
        }
    codeconnu=2;
    } //vérification du code rentré, la fenetre de dialogue reste là tant que le code est faux//

});

ajax.send();
}
mymap.on('click', Enigme_3);


/**
La fonction Enigme_4 permet de résoudre "la 4ème énigme".
Trouver les indices qui permmettent de différencier les suspects les uns des autres pour finir d'enfermer le voleur.
 */
function Enigme_4(e){

    var lat = e.latlng.toString().substring(7,26).split(',')[0];
    var lon = e.latlng.toString().substring(7,26).split(',')[1];

    var ajax = new XMLHttpRequest();
    ajax.open('GET', 'EscapeGame_Jeu.php?pseudo='+pseudo+'&score='+score,true);
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    ajax.addEventListener('load',  function () { 
    var test = JSON.parse(ajax.response)

    if ( 4.67 < lat & lat < 4.68 & -74.15 < lon & lon < -74.14 & inventaire.length == 8 & codeconnu == 2){
        popup
            .setLatLng(e.latlng)
            .setContent("<b>Repère du voleur:</b><br>Le voleur n'est pas tout seul ! Comment savoir qui est le coupable ?</br><br> Le voleur a dépensé son butin dans des objets de luxe, rendons-nous dans les boutiques associées, peut-être que les vendeurs pourront nous aider à l'identifier</br><img style=max-height:350px;max-width:350px; src= chambre2.jpg><br>Cette bague vient de la bijouterie 'La Calera', ce ne serait pas le petit village à l'Est de la ville, près du lac ?</br>")
            .openOn(mymap);
        var bordure1_lat = test[7].bordure_1_lat;
        var bordure1_lon = test[7].bordure_1_lon;
        var bordure2_lat = test[7].bordure_2_lat;
        var bordure2_lon = test[7].bordure_2_lon;

        var bounds = L.latLngBounds([ bordure1_lat, bordure1_lon], [ bordure2_lat, bordure2_lon]);
        var overlay = L.imageOverlay( test[7].url, bounds);
        overlay.addTo(mymap);
        //On affiche le lieu du premier indice sur la carte//
        
        inventaire.push(test[7].id)

        document.getElementById('inventaire_suspects').style.height="110px";
        // On modifie la taille du CSS d'inventaire_suspects. //

        document.getElementById('inventaire_suspects').innerHTML = "<strong>Suspects:</strong><img id='voleur1' src='voleur1.jpg' width=100 height =100 style='z-index:1'><img id='voleur2' src='voleur2.jpg' width=100 height =100 style='z-index:1'><img id='voleur3' src='voleur3.jpg' width=100 height =100 style='z-index:1'><img id='voleur4' src='voleur4.jpg' width=100 height =100 style='z-index:1'>"
        // On affiche les différrents suspects dans l'inventaire pour savoir à quoi ils ressemblent. //

    }

        if ( 4.725 < lat & lat < 4.73 & -73.972 < lon & lon < -73.967 & inventaire.length == 9 ){

            popup
                .setLatLng(e.latlng)
                .setContent("<b>Vendeur de la bijouterie:</b> Ah oui je m'en rapelle, c'est un éuropéen qui m'a acheté cette bague, je me rappelle seulement de ses impressionnantes dents en or,il avait l'air dangereux <br><b>Moi:</b><br>Vous n'avez pas d'avez pas d'autre information qui pourrait m'aider ? Et connaitriez-vous une boutique d'ordinateurs dans le coin ? </br><b>Vendeur:</b><br>Non désolé je n'ai pas d'autre info, par contre une chose est sûre, l'homme que vous cherchez a dû acheter son ordinateur à la boutique de Paco dans le village de Cota près de l'aeroport de Guaymaral à l'Est de la ville. Il fait les meilleurs ordinateurs de toute la Colombie !</br>")
                .openOn(mymap);

            var bordure1_lat = test[8].bordure_1_lat;
            var bordure1_lon = test[8].bordure_1_lon;
            var bordure2_lat = test[8].bordure_2_lat;
            var bordure2_lon = test[8].bordure_2_lon;
    
            var bounds = L.latLngBounds([ bordure1_lat, bordure1_lon], [ bordure2_lat, bordure2_lon]);
            var overlay = L.imageOverlay( test[8].url, bounds);
            overlay.addTo(mymap);
            //on affiche le lieu du 2eme indice sur la carte//
    
            inventaire.push(test[8].id)

            document.getElementById('inventaire_suspects').innerHTML = "<strong>Suspects:</strong><img id='voleur1' src='voleur1.jpg' width=100 height =100 style='z-index:1'><img id='voleur2' src='voleur2barre.png' width=100 height =100 style='z-index:1'><img id='voleur3' src='voleur3.jpg' width=100 height =100 style='z-index:1'><img id='voleur4' src='voleur4.jpg' width=100 height =100 style='z-index:1'>"
            // On modifie la liste des suspects en barrant celui qui ne correspond pas à l'indice donné par le vendeur de la bijouterie ==> Il en reste plus que trois. //
        
        }

            if ( 4.808 < lat & lat < 4.813 & -74.111 < lon & lon < -74.105 & inventaire.length == 10 ){

                popup
                    .setLatLng(e.latlng)
                    .setContent("<b>Vendeur du magasin:</b>Oui je me souviens d'un type pas net avec un énorme tatouage sur le visage et des dents en or massif ! <br><b>Moi:</b><br>Vous n'avez rien remarqué d'autre ?</br><b>Vendeur:</b><br>Non rien je lui ai juste indiqué le McDonald le plus proche, il se trouve au village de Tabio, à quelques minutes d'ici vers le nord</br>")
                    .openOn(mymap);
                var bordure1_lat = test[9].bordure_1_lat;
                var bordure1_lon = test[9].bordure_1_lon;
                var bordure2_lat = test[9].bordure_2_lat;
                var bordure2_lon = test[9].bordure_2_lon;
        
                var bounds = L.latLngBounds([ bordure1_lat, bordure1_lon], [ bordure2_lat, bordure2_lon]);
                var overlay = L.imageOverlay( test[9].url, bounds);
                overlay.addTo(mymap);
                //On affiche le lieu du dernier indice sur la carte//
                inventaire.push(test[9].id)

                document.getElementById('inventaire_suspects').innerHTML = "<strong>Suspects:</strong><img id='voleur1' src='voleur1barre.jpg' width=100 height =100 style='z-index:1'><img id='voleur2' src='voleur2barre.png' width=100 height =100 style='z-index:1'><img id='voleur3' src='voleur3.jpg' width=100 height =100 style='z-index:1'><img id='voleur4' src='voleur4.jpg' width=100 height =100 style='z-index:1'>"
                // On modifie la liste des suspects en barrant celui qui ne correspond pas à l'indice donné par le vendeur du magasin ==> Il en reste plus que deux. //
            
            }

                if ( 4.918 < lat & lat < 4.923 & -74.107 < lon & lon < -74.102 & inventaire.length == 11 ){

                    popup
                        .setLatLng(e.latlng)
                        .setContent("<b>Vendeur McDonald:</b><br>N'en dites pas plus, je me rappelle de lui, il avait les cheveux bruns</br><b>Moi:</b><br>Ca y est je connais le coupable ! Retournons à l'hôtel pour l'arrêter !</br>")
                        .openOn(mymap);
      
                    document.getElementById('inventaire_suspects').innerHTML = "<strong>Suspects:</strong><img id='voleur1' src='voleur1barre.jpg' width=100 height =100 style='z-index:1'><img id='voleur2' src='voleur2barre.png' width=100 height =100 style='z-index:1'><img id='voleur3' src='voleur3.jpg' width=100 height =100 style='z-index:1'><img id='voleur4' src='voleur4barre.png' width=100 height =100 style='z-index:1'>"
                    // On modifie la liste des suspects en barrant celui qui ne correspond pas à l'indice donné par le vendeur du McDonald ==> Il ne reste plus que le voleur. //
                
                }

                    if ( 4.67 < lat & lat < 4.68 & -74.15 < lon & lon < -74.14 & inventaire.length == 11){

                        popup
                            .setLatLng(e.latlng)
                            .setContent("<b>Clique sur le coupable pour l'envoyer derrière les barreaux !</b>")
                            .openOn(mymap);

                        document.getElementById('inventaire_suspects').innerHTML = "<strong>Suspects:</strong><img id='voleur1' src='voleur1barre.jpg' width=100 height =100 style='z-index:1'><img id='voleur2' src='voleur2barre.png' width=100 height =100 style='z-index:1'><a href='fin.php'> <img id='voleur3' src='voleur3.jpg' width=100 height =100 style='z-index:1'> </a><img id='voleur4' src='voleur4barre.png' width=100 height =100 style='z-index:1'>";
                        // On ajoute un lien à la photo du voleur qui permet de renvoyer le joueur à la page final, là où on peut retrouver le résultat de l'utilisateur. //
                    
                    }
                    var t2 = new Date();
                    var fin = t2.getTime();
                    // On recupere le temps à la fin du jeu. //

                    score = (fin - debut)*(Math.pow(10,-3));
                    // A l'aide du temps au début et à la fin de l'escapegame, on retrouve le temps qu'il a mis pour finir le jeu. //
                    
});

ajax.send();
}
mymap.on('click', Enigme_4);


