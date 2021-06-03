import React, { useState } from 'react'
import Img1 from "../photos/register.jpg"
import Img2 from "../photos/marjane.jpg"
import Img3 from "../photos/activity3.jpg"
import Img4 from "../photos/activity4.jpg"
const Comment = () => {

    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)
    const [hover4, setHover4] = useState(false)


    return (
        <div className="w-full py-10 mb-10 px-6 mt-10">
            <h1 className="text-5xl text-hamid text-center " style={{ fontWeight: "600" }}>
                Comment ca marche?
            </h1>

           


            <div className="flex flex-wrap  md:space-x-12  w-full md:space-y-0 space-y-20    px-2 justify-center">

                <div className="flex flex-col relative transform  items-center  cursor-pointer" onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)} >
                    <img src={Img1} className="md:w-60 w-full h-72  object-cover   " />
                    <div className={"absolute top-0 right-0 left-0 h-72 bg-black  opacity-0 z-10 hover:opacity-50 transition-opacity duration-200 ease-linear "}></div>
                    <p className={`bg-indigo-500  p-4   z-20  text-gray-200 text-center  opacity-0 ${hover1 ? 'opacity-90' : 'opacity-0 '} transition-opacity duration-300 ease-linear   absolute  mt-28   text-gray-50 text-center p-2  ${''}  `}> Jargenage</p>
                    <p className="text-lg bg-gray-300 md:w-60 w-full text-center p-2 text-gray-800" style={{fontWeight:"800"}}>Jardinage</p>
                    <p className="md:w-52 w-full  mt-3 text-sm text-gray-500" style={{fontWeight:"500"}}>
                    Le jardinage est la pratique, et parfois l'art, de semer, planter, maintenir des végétaux ... Dans les ca..
                       
                    </p>
                
                </div>

                <div className="flex flex-col relative  transform  bg-gray-50 items-center  cursor-pointer" onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)} >
                   
                    <img src={Img2} className="md:w-60 w-full h-72  object-cover   " />
                    <div className={"absolute top-0 right-0 left-0 h-72  bg-black  opacity-0 z-10 hover:opacity-50 transition-opacity duration-200 ease-linear "}></div>
                    <p className={`bg-indigo-500  p-4   z-20  text-gray-200 text-center  opacity-0 ${hover2 ? 'opacity-90' : 'opacity-0 '} transition-opacity duration-300 ease-linear   absolute  mt-28   text-gray-50 text-center p-2  ${''}  `}> faire les courses</p>
                   
                    <p className="text-lg bg-gray-300 md:w-60 w-full  text-center p-2 text-gray-800" style={{fontWeight:"800"}}>Faire les courses</p>
                    <p className="md:w-52 w-full  mt-3 text-sm text-gray-500" style={{fontWeight:"500"}}>
                     Vous souhaitez   transporter des meubles, des objets à une autre place?  Demander a nous Helpers et vous ne le regretiez pas!    
                    </p>
                </div>


                <div className="flex flex-col relative transform  items-center  cursor-pointer" onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)} >
                    <img src={Img3} className="md:w-60 w-full h-72  object-cover   " />
                    <div className={"absolute top-0 right-0 left-0 h-72 bg-black  opacity-0 z-10 hover:opacity-50 transition-opacity duration-200 ease-linear "}></div>
                    <p className={`bg-indigo-500  p-4   z-20  text-gray-200 text-center  opacity-0 ${hover3 ? 'opacity-90' : 'opacity-0 '} transition-opacity duration-300 ease-linear   absolute  mt-28   text-gray-50 text-center p-2  ${''}  `}> demenagement</p>
                    <p className="text-lg bg-gray-300 md:w-60 w-full text-center p-2 text-gray-800" style={{fontWeight:"800"}}> déménagement </p>
                    <p className="md:w-52 w-full  mt-3 text-sm text-gray-500" style={{fontWeight:"500"}}>
                    Le jardinage est la pratique, et parfois l'art, de semer, planter, maintenir des végétaux ... Dans les ca..
                       
                    </p>
                
                </div>


                <div className="flex flex-col relative transform  items-center  cursor-pointer" onMouseEnter={() => setHover4(true)} onMouseLeave={() => setHover4(false)} >
                    <img src={Img4} className="md:w-60 w-full h-72  object-cover   " />
                    <div className={"absolute top-0 right-0 left-0 h-72 bg-black  opacity-0 z-10 hover:opacity-50 transition-opacity duration-200 ease-linear "}></div>
                    <p className={`bg-indigo-500  p-4   z-20  text-gray-200 text-center  opacity-0 ${hover4 ? 'opacity-90' : 'opacity-0 '} transition-opacity duration-300 ease-linear   absolute  mt-28   text-gray-50 text-center p-2  ${''}  `}> divers</p>
            
                    <p className="text-lg bg-gray-300 md:w-60 w-full text-center p-2 text-gray-800" style={{fontWeight:"800"}}>Divers</p>
                    <p className="md:w-52 w-full  mt-3 text-sm text-gray-500" style={{fontWeight:"500"}}>
 vous avez besois  de personaliser votre requete d'aides ?   informez nous et en vous prendra en charge                        
                    </p>
                </div>







            </div>
            

            <div>
                <h1>  On va se charger pour trouver parmi nous Helpers, ceux qui  satisfaire votre demande</h1>
            </div>





        </div>
    )
}

export default Comment
