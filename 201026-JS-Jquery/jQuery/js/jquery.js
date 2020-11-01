/* ============================================================
===                            jQuery                       ===
===============================================================

Si on veut changer la couleur des paragraphes : */
/* en js */
/* 
let mesParagraphes= document.querySelectorAll("p");
for(let i=0; i<mesParagraphes.length; i++) {
    mesParagraphes[i].className="blue";
} 
*/

/* avec jQuery */
/* une fonction dite "fonction jquery" fait office de sélecteur et se note $ dans sa version contractée :
jquery() version longue
$()      version contractée. */
$('p').addClass("blue");

/* et c'est tout !*/
/* sélecteurs possibles dans $() : 
    $('nomDeBalise')    (sélecteur d'élément html, c'est ce qu'on vient d'utiliser ci dessus)
    $('.blue')          sélecteur de classe
    $('#identifiant')   sélecteur d'identifiant 
    $('blockquote p')   sélecteur descendant
    $('article>p')      sélecteur d'enfant direct
    $('li+li')          sélecteur d'adjacence (directe ou indirecte)

    // filters
    $('p:first')        Sélection du premier paragraphe dans chaque élément
    $('p:last')         Sélection du dernier paragraphe dans chaque élément
    $('p:eq(3)')        sélection du 4e paragraphe, dans chaque élément. (ça commence à 0...)
*/
$("img:first").hide(); // instruction jQuery
// une instruction jQuery est composée :
// d'une sélection 
// d'un point
// d'une méthode (avec parametres ou non)

// méthodes sur les effets :
/*
    hide()      cache un élément
    show()      montre un élément
    toggle()    cache un élément montré, ou montre un élément caché

    fadeOut()   faire disparaître progressivement un élément
    fadeIn()    faire apparaître progressivement un élément
    fadeTo()    amène un élément à une opacité donnée

    slideUp()     cache l'élément en montant
    slideDown()   cache l'élément en descendant
    slideToggle() fait la bascule entre afficher ou disparaître en fonction de l'état 
                  de départ...
*/
$("img:last").hide(3000); // met 3000ms à disparaître...
$("img:last").toggle(1000); // met 1000ms à réaparaître...
$("img:last").fadeOut("slow"); // slow = 600ms  fast=200ms
$("img:last").fadeIn("fast"); // slow = 600ms  fast=200ms
$("img:last").fadeTo("fast", 0.5); // slow = 600ms  fast=200ms

// methodes sur la manipulation de contenu : 
/*
    .html()         // crée du contenu html
    .text()         // remplace le texte
    .replaceWith()  // remplace la balise par une autre 
    .remove()       // retirer du html
    .before()       // ajoute un élément avant celui sélectionné
    .after()        // ajoute un élément après celui sélectionné
    .prepend()      // ajoute juste après la balise ouvrante
    .append()       // ajoute juste avant la balise fermante
    .addClass()     // ajoute une classe sans retirer l'existante
    .removeClass()  // retire... ça dépend des paramètres : une ou plusieurs classes
    .css()          // récupère / définit les propriétés css de l'élément
    .attr()         // ajoute un attribut ou récupère la valeur de l'existant
    .removeAttr()   // supprime l'attribut
*/
$('.test').removeClass("humHum"); // avec un paramètre, on ne retire que la classe concernée
$('.test').removeClass();           // sans param, on retire toutes les classes...

// taille des éléments
/*
    .height()       // interroger / modifier la hauteur de l'élément sélectionné
    .width()        // interroger / modifier la largeur de l'élément sélectionné
*/
// pour récupérer la largeur de l'image : 
console.log($('img:first').width());     // 200 pensez au "moment" où vous interrogez ceci
// si vous faite le test sur l'autre imagej, elle a commencé à se réduire (hide()) et la console nous donne un peu moins que 200 (199.984) !!!

// pour régler la largeur des paragraphes 
$('p').width("700px");      // avec la chaîne de caractère, vous spécifiez les unités 
$('p:eq(1)').width(400);    // sans unités, on est sur de px par défaut

// pour ajouter / modifier du css :
// une propriété à modifier :
$('p').css('background-color', 'lavender');

// plusieurs propriétés : on utilise des objets
$('p').css({"background-color":"cyan",
            "border-radius":"10px",
            "opacity":"0.5",
            "border":"solid",
            "border-width": "2px 0 4px 1px"});


// Événements :
$('h1:first').on("click", function(){
    $('p').slideToggle(500);
} );
// pour avoir "la souris en forme de main" au survol du titre
$('h1:first').css({"cursor":"pointer"});

/* on("evenement"), les evenements possibles (non exhaustif) sont :
    "click"
    "scroll"
    "hover"
    "mouseover"
    "mouseenter"
    "mouseleave"
    "keydown"
    "keyup"
    "keypress"
    "focus"
    "blur"
    ...
*/