/* si on soughaite appliquer plusieurs méthodes au même sélecteur, les notations suivantes
sont -presque- équivalentes : 
*/
/* $('p').css("background-color", "salmon");
$('p').width(500);
$('p').animate({"margin-left":"+=300"}); */

// $('p').css("background-color", "salmon").width(500).animate({"margin-left":"+=300"});

// que l'on notera enfin plutôt comme cela : 

/* $('p').css("background-color", "salmon")
      .width(500)
      .animate({"margin-left":"+=300"}); */ // on a forcément ici un objet, même si une seule propriété doit être animée
// cette derniere est plus performante car on sélectionne qu'une fois l'élt.

// pour animate; 2e parametre : le temps
/* $('p').css("background-color", "salmon")
      .width(500)
      .animate({"margin-left":"+=300"}, 5000)
      .fadeOut(2000)
      .remove(); */

// Le callback : (ou fonction de rappel) fonction qui ne va être exécutée qu'après que la méthode précédente soit terminée ; je veux que le remove soit fait après le fadeOut : 

// pour des raisons de praticité et de présentation, on peut mettre tout le code
// dans $(document).ready(function(){... 
// cela demande à ce que la page soit chargée avant de lancer le code...
$(document).ready(function(){
    $('p').css("background-color", "salmon")
          .width(500)
          .animate({"margin-left":"+=300"}, 5000)
          .fadeOut(2000, function(){
                $('p').remove();
          });
    
    // essayons de faire disparaître les images les unes après les autres :
    // Quand je clique sur un bouton "Disparition des images", je fais disparaitre les images en cascade :
    
    $('div a:first').on('click', function(e){
        e.preventDefault(); 
        apparitionDisparition();
    });
    
    
    // Quand je clique sur le bouton "Faire apparaître les images", je fais réapparaître les images en cascade :
    $('div a:last').on('click', function(e){
        e.preventDefault();
        apparitionDisparition();
    });
    
    function apparitionDisparition (){
        $('figure img').first().slideToggle(1000, function disparaitre(){
            $(this).next().slideToggle(1000, disparaitre);
        });
    }
    
    /* methode delay(temps) si on souhaite attendre avant l'execution de la methode suivante
     function apparitionDisparition (){
        $('figure img').first().slideToggle(1000, function disparaitre(){
            $(this).next().delay(2000).slideToggle(1000, disparaitre);
        });
    } */
    
    /* méthode off("event") : permet d'arrêter un écouteur, il faut avoir le même sélecteur, et même evt. */
    
    $('#toto').on('click', function(){
        $('div a:first').off('click');
        $('div a:last').off('click');
    });
    
    // autre méthode qui permet d'arrêter une animation en cours : stop()
    // ss paramètre, on stoppe l'animation en cours de déroulement
    // true comme parametre : on arrête.. la queue...
    // on va voir le concept de "queue"  ci dessous :
    
    $('#toto').on('click', function(){
        $('img').stop(true); // arrête l'animation en cours de route
    });
    
    // regardons comment les animations s'enchainent :
    // on va animer la bordure et la taille de ma photo 
    $('#animal').css('border',"1px solid black");
    
    // reset :
    $('#reset').on('click', function(){
        $('#animal').css({'border-width':"1px", "width":"250"});
    }) 
    
    
    // par défaut, lorsqu'on fait suivre les méthodes, sur des animations :
    $('#enchainer').on('click', function(){
        $('#animal').animate({'border-width':"100"}, 3000)
                    .animate({"width": "-=100"}, 1500);
    });
    
    // pour avoir le même temps pour les 2 animations :
    $('#enMemeTemps').on('click', function(){
        $('#animal').animate({'border-width':"100", "width": "-=100"}, 1500);
    });
    
    // comment faire pour que les 2 animations ne soient pas enchainées, mais avec des temps différents ?
    $('#pasEnchainer').on('click', function(){
        $('#animal').animate({'border-width':"100"}, {queue:false, duration:3000}) // on casse la queue : on demande à ce que tout soit simultané.
                    .animate({"width": "-=100"}, 1500);
    });
});
