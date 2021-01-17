

var nombreFollowrs
var nombreSuivi
var nombreRepos
var loginUtilisateur
var photoUtilisateur


    x
    



    document.getElementById("monFromulaire").addEventListener('submit', function(e){

        e.preventDefault();
        
        let nomUtilisateur = document.querySelector('#chercherUtilisateur').value;

        nomUtilisateur =nomUtilisateur.split(' ').join('')
       
        await fetch ('https://api.github.com/users/'+nomUtilisateur)

         .then(function(response){
        
            if(response.ok){

               response.json() .then(()=>{

                //console.log(reponse)
            
                
        
                    document.querySelector('#photo-profil').innerHTML = '<figure class="fig"> <img src="'+ reponse.avatar_url + ' " alt="photo profil" class="photo"> <p class="figcaption">'+ reponse.login +'</p></figure>';
                    
                    let divInformation =document.getElementById('informations')
                
                    divInformation.innerHTML = '<p class="follow"> <hr>Followrs :  '+reponse.followers+' <br>Repos : '+reponse.public_repos+' <br>Following : '+reponse.following+'<br><br></p>';
                    
                    divInformation.style.display ='block'


                            
                        })
                    }else{
                        document.querySelector('#photo-profil').innerHTML='<p>Erreur</p>'  


            }

            } )
        })
    
        