// déplacer les élements de la liste de fruits vers mon panier.
// les boutons d'ajout ou de suppression ne doivent s'activer qu'après la sélection d'un fruit
// (dans l'une ou l'autre des listes)
// lors de l'ajout d'un fruit dans la liste "mon panier", celui disparaît de la liste des fruits.
// lors de la suppression d'un fruit dans la liste "mon panier"; celui-ci revient dans la liste de fruits

//vous allez avoir besoin de : "change" .attr() (ou removeAtttr()) .val() .append() .remove()...  

/* $(document).ready(function(){
    //$("#ajouter").attr("disabled", false); // ou bien removeAttr("disabled")
    //$("#ajouter").removeAttr("disabled"); // ou bien removeAttr("disabled")
    // Gestion des boutons Ajouter / supprimer "disabled ou enabled"
    $("#liste_fruits").on("change", function(){
        $('#ajouter').attr("disabled", false);
    });
    $("#panier").on("change", function(){
        $('#supprimer').attr("disabled", false);
    });

    // gestion de l'ajout : 

    $('#ajouter').on("click", function(){
        // on passe par une variable pour simplifier la syntaxe : 
        // cette variable vient récupérer la valeur de l'option sélectionnée 
        let fruitSel=$('#liste_fruits option:selected').val();

        // ajouter avec append la balise <option>
        $("#panier").append(`<option value=${fruitSel}>${fruitSel}</option>`);
        $('#liste_fruits option:selected').remove();
        $('#ajouter').attr("disabled", true);
    });
    //gestion de la suppression
    $("#supprimer").on("click", function(){
        let fruitSel=$("#panier option:selected").val();
        $("#liste_fruits").append(`<option value=${fruitSel}>${fruitSel}</option>`);
        $("#panier option:selected").remove();
        $("#supprimer").attr("disabled", true);
    });
    
}); */

// version 2 : avec une fonction externe : 
function fruitMove(listeArrivee, selection) {
    // pense bete : .text() pour récuper le contenu textuel de la balise :)
    listeArrivee.append(`<option value=${selection.val()}>${selection.text()}</option>`); 
    selection.remove();
}

$(document).ready(function(){
    // Gestion des boutons Ajouter / supprimer "disabled ou enabled"
    $("#liste_fruits").on("change", function(){
        $('#ajouter').attr("disabled", false);
    });
    $("#panier").on("change", function(){
        $('#supprimer').attr("disabled", false);
    });

    // gestion de l'ajout : 
    $('#ajouter').on("click", function(){
        // ajouter avec notre fonction fruitMove()
        fruitMove( $('#panier') , $('#liste_fruits option:selected') );
        $('#ajouter').attr("disabled", true);
    });
    //gestion de la suppression
    $("#supprimer").on("click", function(){
        fruitMove( $('#liste_fruits') , $('#panier option:selected') );
        $("#supprimer").attr("disabled", true);
    });
});