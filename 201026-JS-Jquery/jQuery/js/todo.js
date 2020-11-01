/* ================================================================ 
===							todolist						===
===================================================================
*/

/* 
Comportement attendu :
À chaque appui sur le bouton "ajouter", on doit ajouter un élément <li> contenant le texte inséré dans le champ input.
Chaque nouvel élément apparaîtra en dessous du précédent.

Si je clique sur une li existante, elle doit disparaître. 
*/
/* vous allez avoir besoin de : 
		preventDefault()
		append()
        on()
        remove()
        val() (sans argument)
        ... 
*/
/* Commencez par faire disparaitre une li */
$('ul').on("click", function(e){
    // remove sur la li cliquée : on se sert de target pour récupérer la cible de l'elt cliqué.
    e.target.remove();
});

// pour faire apparaître un élément en cliquant sur le bouton :
$('#ajouter').on("click", function(e){
    // éviter le changement / rechargement de la page / comportement "normal" du bouton
    e.preventDefault();
    // ajout d'un element li
    let ajout=$('#item').val();
    $('ul').append(`<li>${ajout}</li>`); // $('ul').append("<li>"+ajout+"</li>");

    // vider le champ input apres avoir ajouté :
    $('input:text').val('');
    // $('#item').val(''); possible aussi...
});