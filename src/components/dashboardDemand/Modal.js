import React, { useState, useEffect } from 'react'
import { IconClose } from '../svg/mainIcons';


const Modal = ({ openModalHook, data, color, text }) => {

    const [openModal, setOpenModal] = openModalHook


    // just for TRANSITION 
    const [ModalScale, setModalScale] = useState(50);

    // just transitino 
    useEffect(() => {
        const tm = setTimeout(() => setModalScale(105), 10)

        return () => {
            clearTimeout(tm)


        }
    }, [])

    return (
        <div >
            <div className="fixed  z-20 bg-black opacity-70 top-0 right-0 left-0 bottom-0 " style={{ fontFamily: "Montserrat" }}></div>
            <div className={`fixed z-30 top-72 md:right-1/3 md:left-1/3 left-10 right-10 bg-white flex flex-col p-3  transform scale-${ModalScale}  transition-transform ease-in rounded-xl`} style={{ transitionDuration: "200ms" }}>
                <button className="absolute right-3 top-2 hover:text-red-400 text-black" onClick={() => setOpenModal(false)}><IconClose /></button>
                <p className="text-sm text-center text-gray-500 capitalize"> action relative a l'offre : {data.offre} </p>
                <h1 className=" text-gray-800 text-center p-4" style={{ fontWeight: "600" }} >{data.text} </h1>


                <div className=" flex flex-wrap justify-center  scla space-x-4 p-2 mt-4 ">
                    <button onClick={() => { data.yesMethod(); setOpenModal(false) }} className={`p-2 ${data.color} hover:opacity-50 w-40 text-gray-50 rounded-3xl`}>Oui</button>
                    <button onClick={() => setOpenModal(false)} className={`p-2  w-40 bg-gray-200 hover:opacity-50 text-gray-600 rounded-3xl`}>Annuler</button>
                </div>

            </div>

        </div>
    )
}

export default Modal