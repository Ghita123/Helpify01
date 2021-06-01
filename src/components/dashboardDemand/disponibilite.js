import React, { useState, useEffect } from 'react'
import { IconClock, IconClose, IconDateFilled, IconEdit, IconPause, IconPlay, IconTrash } from '../svg/mainIcons'
import { MdDirectionsBike, MdDirectionsWalk } from "react-icons/md"
import { BiMapPin } from "react-icons/bi"
import { FaHandsHelping } from "react-icons/fa"
import Modal from './Modal'
import ModalEdit from "./ModalEdit"
import axios from 'axios'
import { nanoid } from 'nanoid'
import { dataDays } from '../../data/dataModalAjouter'
import MapBox from '../map/MapBox'
import StaticMapbox from "../map/StaticMapbox"



const Disponibilte = ({ id, data, listDemandes, setListDemandes }) => {

    const [openModal, setOpenModal] = useState(false)
    const [openModalEdit, setOpenModalEdit] = useState(false)

    const [dataForModal, setDataForModal] = useState({
        offre: "1",
        text: "",
        color: "bg-green-200"
    })

    return (
        <div className="  flex  flex-col flex-auto space-y-1 p-8 ring-2 ring-gray-100  bg-gradient-to-l from-white to-white border-2 border-gray-50  rounded-xl shadow-xl" style={{ fontFamily: "Montserrat" }}>

            <div className="flex justify-center">
                <h1 className={`md:text-2xl text-lg text-gray-50 ${data.isActive ? 'bg-green-500 ' : 'bg-gray-400'} p-2 px-4 rounded-full flex items-center `} style={{ fontWeight: "600" }}>Demande : #{id} <p className="text-sm px-4"> {data.isActive ? 'active' : 'en pause'} </p></h1>

            </div>


            <div className={`${!data.isActive && 'opacity-40 transition-opacity duration-500 ease-linear'}`}>

                <div className="Type Activite">

                    <p className="capitalize text-sm text-gray-400 " style={{ fontWeight: "500" }}>Type activite</p>

                    <div className="p-3 space-y-2" style={{ fontWeight: "700" }}>
                        <div className="flex items-center  space-x-2 text-gray-100  capitalize text-xl" >
                            <FaHandsHelping className="w-6 h-6 text-blue-600" />
                            <div className="text-blue-600">
                                <p >{data.typeActivity.title}</p>
                               
                                {/* <p >acitive divers</p> */}
                            </div>
                        </div>


                    </div>

                </div>

                <div className="description">

                    <p className="capitalize text-sm text-gray-400 " style={{ fontWeight: "500" }}>Description</p>

                    <div className="p-3 space-y-2" style={{ fontWeight: "700" }}>
                        <div className="flex items-center  space-x-2 text-gray-100  capitalize text-xl" >
                            <div className="text-blue-600">
                                <p >{data.description}</p>
                        
                            </div>
                        </div>

                    </div>

                </div>


                <div className="date">

                    <p className="capitalize text-sm text-gray-400 " style={{ fontWeight: "500" }}>date </p>

                    <div className="p-3 space-y-2" style={{ fontWeight: "700" }}>
                        <div className="flex items-center  space-x-2 text-gray-100  capitalize text-xl" >
                            <div className="text-blue-600">
                            <p >{data.date?.toLocaleDateString()}</p>
                            
                             
                            </div>
                            
                        </div>


                    </div>

                    <p className="capitalize text-sm text-gray-400 " style={{ fontWeight: "500" }}>Heure </p>

<div className="p-3 space-y-2" style={{ fontWeight: "700" }}>
    <div className="flex items-center  space-x-2 text-gray-100  capitalize text-xl" >
        <div className="text-blue-600">
       
            <p >{data.date?.toLocaleTimeString()}</p>
         
        </div>
        
    </div>


</div>
<div className="Localisation">
                    <p className="capitalize text-sm text-gray-400 " style={{ fontWeight: "500" }}>Localisation</p>

                    <StaticMapbox localisationX={data.localisationX} localisationY={data.localisationY} />
</div>

                </div>
               
            </div>

            <div className="Operations flex  justify-around p-3 border border-gray-100 bg-gray-100 rounded-full ">
                <div onClick={() => setOpenModalEdit(true)} >
                    <IconEdit w={5} h={5} />
                </div>

                {
                    openModalEdit &&
                    <ModalEdit openModalHook={[openModalEdit, setOpenModalEdit]} data={data} listDemandes={setListDemandes} setListDemandes={setListDemandes} />

                }


                {

                    data.isActive ?

                        <div
                            onClick={() => { setDataForModal({ offre: id, color: "bg-yellow-500", text: "voulez vous vraiment mettre en pause la demande?", yesMethod: () => setListDemandes(listDemandes => [...listDemandes.filter(item => item.id != id), { ...data, isActive: false }]) }); setOpenModal(true) }}
                        >

                            <IconPause w={5} h={5}
                            />
                        </div>
                        :
                        <div
                            onClick={() => { setDataForModal({ offre: id, color: "bg-green-500", text: "vous allez activer cette Demande, Continuer?", yesMethod: () => setListDemandes(listDemandes => [...listDemandes.filter(item => item.id != id), { ...data, isActive: true }]) }); setOpenModal(true) }}
                        >

                            <IconPlay w={5} h={5}
                            />
                        </div>

                }

                <div
                    onClick={() => { setDataForModal({ offre: id, text: 'voulez vous vraiment supprimer cette Demande?', color: 'bg-red-600', yesMethod: () => setListDemandes(listDemandes.filter(item => item.id != id)) }); setOpenModal(true) }}>

                    <IconTrash w={5} h={5} />
                </div>

                {
                    openModal &&
                    <Modal data={dataForModal} openModalHook={[openModal, setOpenModal]} />
                }

            </div>


        </div>
    )
}

export default Disponibilte