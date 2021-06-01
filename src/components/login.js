import React, { useState, useEffect } from 'react'
import { FaHandsHelping } from "react-icons/fa"
import { FiUser } from "react-icons/fi"
import { BsLock } from "react-icons/bs"
import { ImSpinner } from "react-icons/im"
import { GiCheckMark, GiSwordSpin } from "react-icons/gi"

import axios from "axios"

import { navigate } from "@reach/router"

import RegisterImg from "../photos/register.jpg"
import RegisterImgPsd from "../photos/registerPsd.png"
import * as EmailValidator from 'email-validator';
import { Link } from '@reach/router'




function Login() {
    const [email, setEmail] = useState("test@email.com")
    const [motdepasse, setMotdepasse] = useState("")
    const [erreur, setError] = useState({ email: "", motdepasse: "" })
    const [message, setMessage] = useState(null)


    const handleLogin = () => {

        const url = {
            remote: "https://helpify-back.herokuapp.com/login",
            local: "http://localhost:8081/login"
        }

        if (!EmailValidator.validate(email))
            return setError({ email: "Email non valide", motdepasse: "" });

        if (motdepasse.length == 0)
            return setError({ email: "", motdepasse: "Entrer un mot de passe" });

        setMessage(<GiSwordSpin size="30px" className="animate-spin text-purple-600" />)


        axios.get(`${url.remote}?email=${email}&password=${motdepasse}`)
            .then(res => {
                console.log(res.data)
                if (res.data)
                    setTimeout(() => { setMessage(<div className="text-green-500  flex items-center  gap-2"> <GiCheckMark /> Welcome!    </div>); localStorage.setItem("email", email); navigate("/Dashboard") }, 2000)

                else setMessage("Error! try again")
            })
            .catch(e => console.error(e))




    }
    // useEffect(() => {
    //     EmailValidator.validate(email) ? setError({email:"",motdepasse:""}):setError({email:"Email non valide",motdepasse:""})
    // }
    // , [email])


    return (

        <div>

            <div className=" flex flex-wrap h-screen " style={{ fontFamily: "Montserrat" }} >
                <div className="md:w-1/2 w-full border flex flex-col justify-center items-center space-y-4  py-6 gap-3  ">
                    <Link to="/">
                        <div className="flex flex-wrap  items-center ">
                            <p className="text-4xl " style={{ color: "#6F4BFF" }}>
                                Helpify
             </p>
                            <FaHandsHelping className="text-blue-400" style={{ color: "#31E7EE" }} size="50px" />
                        </div>
                    </Link>

                    <div className="flex flex-col gap-3">
                        <div className="border border-gray-400 flex  items-center   p-3 rounded-3xl md:w-80">
                            <FiUser className="text-gray-200 mr-3" />
                            <input
                                type="text"
                                className="focus-within:outline-none placeholder-gray-300 "
                                name="email"
                                onChange={evt => setEmail(evt.target.value)}
                                class="form-control"
                                placeholder="Enter email"
                                id="email" />
                        </div>
                        <div className="text-danger">{erreur.email}</div>
                        <div className="border border-gray-400 flex  items-center   p-3 rounded-3xl md:w-80">
                            <BsLock className="text-gray-200 mr-3" />
                            <input type="password" className=" focus-within:outline-none placeholder-gray-300 "
                                name="password"
                                onChange={evt => setMotdepasse(evt.target.value)}
                                placeholder="Enter password"
                                class="form-control"

                            />
                        </div>


                        <div className="text-danger">{erreur.motdepasse}</div>
                    </div>



                    <div className="flex items-center text-gray-300 text-sm gap-2">
                        <input type="checkbox" />
                        <div>  Remember me </div>
                    </div>
                    <button type="submit" value="Submit" class="btn btn-success" className="p-3 text-white w-80 font-semibold text-lg   bg-gradient-to-r from-blue-400 to-purple-500  md:w-80  rounded-3xl " onClick={() => handleLogin()}>
                        Login
              </button>

              <Link to="/ForgetPassword" >
          <div className="text-sm text-gray-400">forget password? </div>
          </Link>
                    <div className="text-sm text-gray-400">
                        Not a user yet ? <Link to="/register"> <span className="cursor-pointer" style={{ color: "#6F4BFF" }}> Register Here</span></Link>
                    </div>
                    <div>
                        {message}
                    </div>
                </div>


                <div className="md:w-1/2   bg-blue-200 overflow-hidden " style={{}} >
                    <img src={RegisterImgPsd} className="h-full w-full object-cover" />
                    <p className="transform text-gray-300 text-3xl  text-center translate-x-6 -translate-y-96">" When we give cheerfully and accept gratefully, everyone is blessed "</p>

                </div>


            </div >

        </div>
    );
}


export default Login;



















