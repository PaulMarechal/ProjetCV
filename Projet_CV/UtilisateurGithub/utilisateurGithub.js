

var nombreFollowrs
var nombreSuivi
var nombreRepos
var loginUtilisateur
var photoUtilisateur

    async function getUser(nomUtilisateur){
        var reponse = await fetch ('https://api.github.com/users/'+nomUtilisateur)
        console.log(reponse)
        return reponse
    }

    document.getElementById("monFromulaire").addEventListener('submit', function(e){

    e.preventDefault();
    // Valueur de l'input de recherche 
    let nomUtilisateur = document.querySelector('#chercherUtilisateur').value;
// On split puis on joint pour eviter les espaces : on cherche un seul nom utilisateur 
    nomUtilisateur =nomUtilisateur.split(' ').join('')
    
    // Reponse requete de Json
    getUser(nomUtilisateur)
    .then(function(reponse){
            return reponse.json()
            
        })      
        .then(function(reponse){
        // On ajoute la donnée de la div photo et on la met dans la figure ( photo + nom utilisateur)
         
       document.querySelector('#photo-profil').innerHTML = '<figure class="fig"> <img src="'+ reponse.avatar_url + '" alt="photo profil" class="photo"> <p class="figcaption">'+ reponse.login +'</p></figure>';
       
       let divInformation = document.getElementById('informations')
        // On place et affiche followers / repos / following dans la div 'information'
       divInformation.innerHTML = '<p class="follow"> <hr>Followrs :  '+reponse.followers+' <br>Repos : '+reponse.public_repos+' <br>Following : '+reponse.following+'<br><br></p>';
       // On affiche la div à la validation du bouton 
       divInformation.style.display ='block'
       })

       // On catch l'erreur 
        .catch(function(err){
            alert("Utilisateur inconnu, merci de réessayer");
           

        } )
   
   
   
    })
