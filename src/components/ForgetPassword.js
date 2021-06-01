import React , {useState,useEffect} from 'react'    
import { Link } from "@reach/router"
import axios from 'axios';

function ForgetPassword() {
    const [email, setEmail] = useState("");
    const [message,setMessage] = useState(null)

    useEffect(() => {
        setMessage(<p class="text-black text-center">entrain de rechercher...</p>)
if (email.length==0 )
setMessage('')
else{
        axios.get('https://helpify-back.herokuapp.com/findUser?email='+email)
        .then(res=>{
            if(res.data){
                setMessage(<p class="text-green-600 text-center">   Mail valide</p>)
            }
            else {
                setMessage(<p class="text-red-600 text-center">Aucun utilisateur avec cette adresse mail</p>)


            }
      
        })
    }
    }, [email])
 
    return (
  <div class=" border-4 border-indigo-600 ...font-sans antialiased text-gray-600 min-h-full flex flex-col min-h-full flex flex-col relative m-40">
  <div class="relative z-10 flex-auto flex items-center justify-center text-sm text-center text-gray-600 py-16 px-4 sm:px-6 lg:px-8">
<div class="w-full max-w-sm">
    <h1 class="text-center mb-2 text-blue-600 text-sm font-semibold">Modifier votre mot de passe</h1>
<p class="text-center text-sm mb-10">Entrez votre email et on vous enverra  un code pour le modifier</p>
<div>
 <input onChange={e=>setEmail(e.target.value)}  type="text" class=" bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 sm:text-sm focus:border-teal-500 focus:ring-teal-500 focus:outline-none" placeholder="Adresse mail"  />
 
</div>
<button  type="submit" class="block w-full py-2 px-3 border border-transparent rounded-md text-white font-medium bg-blue-600 shadow-sm sm:text-sm mt-4 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50">
      Modifier votre mot de passe 
    </button>
</div>
</div>
<p className="text-red-600 text-center">
{message}
</p>
<footer class="relative z-10 flex-none text-sm text-center py-4 px-4 sm:px-6 lg:px-8">
<div class="text-gray-900 sm:flex sm:items-center sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
<p>Vous n'avez pas de compte?</p>
<Link to="/register" >
<a   class="rounded-md border border-gray-300 hover:border-gray-400 py-2 px-10 font-medium flex items-center justify-center">
Inscrivez vous 
</a>
</Link>
</div>
</footer>
</div>




)
}
export default ForgetPassword;