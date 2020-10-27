$(document).ready(function(){

    const pseudo = $("#pseudo");
    const mail = $("#mail");
    const mdp = $("password");
    const champ = $(".champ");
    const valider = $("#valider");
    const erreur = $(".erreur");
    const reset = $("#reset")


    function verifier(champ){
        if(champ.val() == ""){
            erreur.css('display', 'block');
        }
    }

    valider.click(function(e){
        e.preventDefault();

        verifier(pseudo);
        verifier(mdp);
        verifier(mail);
    });

    reset.click(function(){
        erreur.css('display', 'none')
    })
});