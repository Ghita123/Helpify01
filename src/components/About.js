import React from 'react'    
import aboutImg2 from "../photos/about2.jpg"
import home2 from "../photos/home2.jpg"
import kenza from "../photos/kenza.jpg"
import harchi from "../photos/harchi.jpg"
import issati from "../photos/issati.jpg"
import ghita from "../photos/ghita.jpeg"
import Footer from './Footer'
import { FaHandsHelping } from "react-icons/fa"
import { Link } from '@reach/router'
function About() {
 
    return (
      <div>
        
      <div
      class="relative pt-16 pb-32 flex content-center items-center justify-center"
    >
      <div
        class="absolute top-0 w-full h-full bg-center bg-cover  "
     >
  <Link to="/"> <div className="flex flex-wrap  items-center ">
                            <p className="text-2xl " style={{ color: "#6F4BFF" }}>
                                Helpify
             </p>
                            <FaHandsHelping className="text-blue-400" style={{ color: "#31E7EE" }} size="30px" />
                        </div>
                        </Link> 
         <img src={aboutImg2} className="h-full w-full object-cover opacity-75" />
      

      </div>
      <div class="container relative mx-auto">
        <div class="items-center flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div class="pr-12">
              <h1 class="text-white font-semibold text-5xl">
             A PROPOS
              </h1>
            
                <p class=" bg-purple-600   p-3  rounded-t-lg   mt-4 text-lg text-white ">
Besoin de dispenser ou de recevoir des cours particuliers ? De réaliser
de petits travaux ? D’offrir un coup de main pour un déménagement ?
La réponse à vos appels au secours se trouve peut-être à quelques
mètres de chez vous. <br/>Notre application « HELPIFY » facilitera cet
échange de service pour le plus grand confort de l’utilisateur.
              </p>
            </div>
          </div>
        </div>
        </div>

     
        </div>
        <section class="pb-5 pt-5 bg-gray-200 -mt-25">
          <div class="flex flex-wrap items-center mt-20">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
             
              <h3 class="text-3xl mb-2 font-semibold leading-normal text-black">
              L'échange de services devient enfin facile. <p class=" text-purple-600 text-center">ALLEZ...HELPIFY!</p>
              </h3>
              <p
                class="text-lg font-light leading-relaxed mt-4 mb-4 text-black"
              >
  <ol>
  <li>* Inscrivez-vous et renseignez quelques informations.</li>
  <li>*Rendez un service.</li>
  <li>*Demandez des services à d'autres HELPIFYEURS.</li>
</ol>
              </p>
             
                  </div>
                <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-purple-600"
            >
                <img  src={home2}
                class="w-full align-middle rounded-t-lg opacity-50"
                />


                  <h4 class="text-xl font-bold  ml-10 mr-10 text-white">
                Notre Objectif
                  </h4>
                  <p class="text-md font-light mt-2  ml-10 mr-10 text-white">
                  Le but ultime de notre application est de permettre à ses utilisateurs de
proposer et/ou demander des services en fonction de leurs
compétences et leurs disponibilités dans un esprit d’entraide ou contre
une rémunération.
                  </p>
                  </div>
              
                </div>
          </div>
          </section>
          <section class="pt-20 pb-48">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold">Notre équipe</h2>
              <p class="text-lg leading-relaxed m-4 text-gray-600">
               Nous sommes des étudiants de l'école Mohammadia d'ingénieurs , et nous avons développé cette applicaton web dans le cadre du projet intégré de notre 4ème semestre. 
              </p>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src={kenza}
                  class="shadow-lg rounded-full max-w-full mx-auto"
              
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">ELKHATTAR KENZA</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Web Developer
                  </p>
                 
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src={ghita}
                  class="shadow-lg rounded-full max-w-full mx-auto"
                 
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold"> DOUAZI GHITA</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Web Developer
                  </p>
                 
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src={issati}
                  class="shadow-lg rounded-full max-w-full mx-auto"
                
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">EL ISSATI MOHAMED</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Web Developer
                  </p>
 
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div class="px-6">
                <img
                  alt="..."
                  src={harchi}
                  class="shadow-lg rounded-full max-w-full mx-auto"
                 
                />
                <div class="pt-6 text-center">
                  <h5 class="text-xl font-bold">ELHARCHI ABDERRAHMANE</h5>
                  <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Web Developer
                  </p>
               
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer >
                <Footer />
            </footer>
</div>
     
)
}
export default About;