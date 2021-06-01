import React, { useState, useEffect } from 'react'
import { FaHandsHelping } from "react-icons/fa"
import { FiUser, FiPhone, FiMap } from "react-icons/fi"
import { BsLock } from "react-icons/bs"
import { ImSpinner } from "react-icons/im"
import { GiCheckMark, GiSwordSpin } from "react-icons/gi"

import axios from "axios"

import RegisterImg from "../photos/register.jpg"
import RegisterImgPsd from "../photos/registerPsd.png"
import { Link } from '@reach/router'



const handleRegister = (email, password, agree, otherData, setMessage) => {

    const url = {
        remote: "https://helpify-back.herokuapp.com/register",
        local: "http://localhost:8081/register"
    }

    setMessage(<GiSwordSpin size="30px" className="animate-spin text-purple-600" />)
    if (agree && email && password)




        axios.post(url.remote, {
            email: email,
            password: password,
            ...otherData
        }).then(
            res => {
            console.log(res.data)
            if (res.data)
                setTimeout(() => { setMessage(<div className="text-green-500  flex items-center  gap-2"> <GiCheckMark />successfully register ! Welcome   </div>) }, 2000)

            else setMessage("Error! try again")
        })
            .catch(e => console.error(e))



}


const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [otherData, setOtherData] = useState({
        prenom: "",
        nom: "",
        sexe: "homme",
        telephone: "",
        adresse: ""
    })

    const [match, setMatch] = useState(null)
    const [agree, setAgree] = useState(false)
    const [message, setMessage] = useState(null)

    useEffect(() => {
        setMessage(<p class="text-black text-center">entrain de rechercher...</p>)
if (email.length==0 )
setMessage('')
else{
        axios.get('https://helpify-back.herokuapp.com/findUser?email='+email)
        .then(res=>{
            if(res.data){
                setMessage(<p class="text-red-600 text-center"> 
                Mail déjà existant</p>)
            }
            else {
                setMessage()


            }
      
        })
    }
    }, [email])
    return (
        <div className=" flex flex-wrap h-screen " style={{ fontFamily: "Montserrat" }} >
            <div className="md:w-1/2 w-full border flex flex-col justify-center items-center space-y-4  py-12 gap-3  ">
                <Link to="/">
                    <div className="flex flex-wrap  items-center ">
                        <p className="text-4xl " style={{ color: "#6F4BFF" }}>
                            Helpify
                 </p>
                        <FaHandsHelping className="text-blue-400" style={{ color: "#31E7EE" }} size="50px" />
                    </div>
                </Link>

                <div className="flex flex-col gap-3">

                    <div className=" flex space-x-5 ">
                        <div className="border border-gray-400 flex  items-center   p-3 rounded-3xl md:w-48">
                            <input onChange={(evt) => { setOtherData({ ...otherData, nom: evt.target.value }) }} type="text" className="focus:outline-none placeholder-gray-300 w-full " placeholder="Nom" />
                        </div>
                        <div className="border border-gray-400 flex  items-center   p-3 rounded-3xl md:w-44">
                            <input onChange={(evt) => { setOtherData({ ...otherData, prenom: evt.target.value }) }} type="text" className="focus:outline-none placeholder-gray-300  w-full" placeholder="Prenom" />
                        </div>

                    </div>




                    <div className="border border-gray-400 flex  items-center   p-3 rounded-3xl md:w-96">
                        <FiUser className="text-gray-200 mr-3" />
                        <input onChange={(evt) => setEmail(evt.target.value)} type="text" className="focus:outline-none placeholder-gray-300 " placeholder="email" />
                    </div>
                    {message}

                    <div className="border border-gray-400 flex  items-center   p-3 rounded-3xl md:w-96">
                        <BsLock className="text-gray-200 mr-3" />
                        <input onChange={(evt) => setpassword(evt.target.value)} type="password" className="focus:outline-none placeholder-gray-300 " placeholder="mot de passe" />
                    </div>

                    <div className={` border ${match === false ? "border-red-500" : "border-gray-400 "} flex  items-center   p-3 rounded-3xl md:w-96`}>
                        <BsLock className="text-gray-200 mr-3" />
                        <input onChange={(evt) => { setMatch(evt.target.value === password ? true : false) }} type="password" className={`focus:outline-none placeholder-gray-300 `} placeholder="repetez mot de passe" />
                    </div>

                    <div className="flex  items-center  justify-around  p-2">
                        <label className="capitalize   " htmlFor="jenis" >Sexe</label>
                        <span className="flex items-center space-x-2">
                            <input checked={otherData.sexe === "homme"} onChange={(evt) => setOtherData({ ...otherData, sexe: evt.target.value })} className="p-2 border-b  " type="radio" name="sexe" value="homme" />
                            <span>  Home</span>
                        </span>
                        <span className=" flex items-center space-x-2">
                            <input checked={otherData.sexe === "femme"} onChange={(evt) => setOtherData({ ...otherData, sexe: evt.target.value })} className="p-2 border-b  " type="radio" name="sexe" value="femme" />
                            <span> Femme</span>
                        </span>

                    </div>


                    <div className={` border ${false ? "border-red-500" : "border-gray-400 "} flex  items-center   p-3 rounded-3xl md:w-96`}>
                        <FiPhone className="text-gray-200 mr-3" />
                        <input onChange={(evt) => { setOtherData({ ...otherData, telephone: evt.target.value }) }} type="text" className={`focus:outline-none placeholder-gray-300 `} placeholder="06 xx-xx-xx" />
                    </div>

                    <div className={` border ${false ? "border-red-500" : "border-gray-400 "} flex  items-center   p-3 rounded-3xl md:w-96`}>
                        <FiMap className="text-gray-200 mr-3" />
                        <input onChange={(evt) => { setOtherData({ ...otherData, adresse: evt.target.value }) }} type="text" className={`focus:outline-none placeholder-gray-300 `} placeholder=" adresse" />
                    </div>

                </div>

                <div className="flex items-center text-gray-300 text-sm gap-2">
                    <input value={agree} onChange={(evt) => { setAgree(!agree); console.log({ agree }) }} type="checkbox" />
                    <div> j'accepte <span className="cursor-pointer" style={{ color: "#6F4BFF" }}> Terms of conditions</span></div>
                </div>
                <button disabled={agree ? false : true} onClick={() => handleRegister(email, password, agree, otherData, setMessage)} className={`p-3 text-white w-80 font-semibold text-lg   ${agree ? ' bg-gradient-to-r from-blue-400 to-purple-500' : ' bg-gray-300 cursor-not-allowed'}   md:w-96  rounded-3xl`}>
                    S'inscrire
                  </button>

                <div className="text-sm text-gray-400">
                    deja un utisateur ? <Link to="/login"> <span className="cursor-pointer" style={{ color: "#6F4BFF" }}> Login ici</span> </Link>
                </div>
                <div>
                    {message}
                </div>
            </div>

            <div className="md:w-1/2   bg-blue-200 overflow-hidden " style={{}} >
                <img src={RegisterImgPsd} className="h-full w-full object-cover" />
                <p className="transform text-gray-300 text-3xl  text-center translate-x-6 -translate-y-96">" When we give cheerfully and accept gratefully, everyone is blessed "</p>

            </div>
            {/* <div className="md:w-1/2 w-full object-fit border    bg-blue-500    " style={{}} >
                <p className="p-20  bg-register   ">hamid</p>
                <img src={RegisterImg} className="  bg-cover " />
            </div> */}

        </div >
    )
}

export default Register