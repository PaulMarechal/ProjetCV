

/* Selectionne le div golobal qui contient tous les div (chauque div est une question) */
var container = document.querySelector("#quiz")
 
/* uerySelectorAll("div")[]: Selectionne tous les div contenu dans le div global 
* Pour pour plus d'information visiter le liens : https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll
donc divQuestion variable  qui contient tous les div.
*/
var divQuestion  = container.querySelectorAll("div");


/*--- l'action à effectuer lordqu'on envoie le formulaire --- */
document.querySelector('#monQuiz').addEventListener('submit',function(e){

/*--preventDefault annule le comporttament pas défaut de du formulaire
* qui est de rafraichir la page automatiquement une fois le formulaire envoyé 
--*/ 
         e.preventDefault();

         let score=0 /* variable qui contient le nombre de bonnes réponse */

            /*--Boucle for pour parcourire tous les élements  de divQuestion-- */
         for (let i = 0; i < divQuestion.length; i++){

         

            let inputRadio = document.getElementById('reponse-'+i)   /* On selectionne dans la question i 
                                                                      * le input qui contient la réponse */
          
            /*--On vérifie s'il est selectionné par l'utilisateur */
            if (inputRadio.checked){ /*si c'est oui on lui applique le style de la classe "bonneReponse"  */
                score ++

                divQuestion[i].className= "bonneReponse" 

                


              } else {/*si c'est non on lui applique le style de la classe "mauvaiseReponse"  */

                divQuestion[i].className= "mauvaiseReponse"
                
              } }
              
  /*-------------------------------  Afficher le score à l'utilisateur  ------------------------------- */
              if (score >= 4)  {
                document.querySelector('h1').textContent ='Votre score est : ' +score+'/5. Bravo  👏  🥳 🎉'
              }else {
                document.querySelector('h1').textContent ='Votre score est : ' +score+'/5. Null 🤪 😩 😬 '

              }
              
  /*-------------------------------------------------------------------------------------------------- */ 
                  })


 /*---------------------  L'action à déclencher lorque l'utilisateur clique sur recommencer-----------*/
            document.querySelector('#recommencer').addEventListener('click', ()=>{


                window.location.reload();  /*------- recharger la page actuelle ------- */

            })

            