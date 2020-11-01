/* ================================================================ 
===							todolist						===
===================================================================
*/

/* 
Comportement attendu :
À chaque appui sur le bouton "ajouter", on doit ajouter un élément <li> contenant le texte inséré dans le champ input.
Chaque nouvel élément apparaîtra en dessous du précédent.

Si je clique sur une li existante, elle doit disparaître. 

Commencez par faire disparaitre une li */

$('ul').on("click", function(e){
    e.target.remove();
});

// pour faire apparaître un élément en cliquant sur le bouton :
$('#ajouter').on("click", function(e){
    e.preventDefault();

    let ajout=$('#item').val();
    if(ajout!=''){
        // ajout d'un element li
        $('ul').append(`<li>${ajout}</li>`); // $('ul').append("<li>"+ajout+"</li>");
        // vider le champ input apres avoir ajouté :
        $('input:text').val(''); // $('#item').val(''); possible aussi...
        $('#item').attr("placeholder", "élément à ajouter à la liste");
    }else{
        /* $('#item').css("background-color","pink");
        $('#item').attr("placeholder", "attention vous n'avez rien saisi...");
        $('#item').addClass("whitePlh"); */
        $('#item').css("background-color","pink")
                  .attr("placeholder", "attention vous n'avez rien saisi...")
                  .addClass("whitePlh");
    }
});
// Quand on veut réécrire, il faut remettre le fond en blanc... (et le placeholder en gris)
$('#item').on("keypress", function(){
    $('#item').removeClass().css("background-color","white");
})
