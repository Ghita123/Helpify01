import React, { useState, useEffect } from 'react'
import { IconClock, IconClose, IconDateFilled, IconEdit, IconOffreur, IconPause, IconPlay, IconTrash } from '../svg/mainIcons'

import { FaHandsHelping } from "react-icons/fa"
import Modal from './Modal'
import axios from 'axios'
import { nanoid } from 'nanoid'

import MapBox from '../map/MapBox'
import StaticMapbox from "../map/StaticMapbox"

import moment from "moment"


const Disponibilte = ({ id, data, listDemandes, setListDemandes,setRefresh,userInfo,setOpenModalOffres }) => {

    const [openModal, setOpenModal] = useState(false)
    const [openModalEdit, setOpenModalEdit] = useState(false)


    const [listOffresMatching,setListOffresMatching] = useState([]);
    const [dataForModal, setDataForModal] = useState({
        offre: "1",
        text: "",
        color: "bg-green-200"
    })



    const demande = {
        id:1,
        titre:"lkjsad lkj",
        type_activite:"divers",
        description:"abc c ",
        localisationX:4,
        localisationY:5.5,
        date:"2021-06-04",
        time:"10:10:00",
        etat:"notAffectue",
        typeActivite:""
     }



useEffect(()=>{


    

    axios.get("https://helpify-back.herokuapp.com/offre/offres")
    .then(res=>{

        console.log({data})
        console.log({allOffres : res.data}); 

        

        // console.log({Filtered :res.data.filter(offre=>
            
        //     offre.type_activite==demande.type_activite &&
    
        //     Math.abs(demande.localisationX-offre.localisationX)<=offre.perimetre &&
    
        //     moment(offre.start_day) <= moment(demande.date).isoWeekday() && 
    
        //     moment(demande.date).isoWeekday()  <=  moment(offre.end_day) && 
    
        //     moment(demande.time,"HH:mm:ss") >  moment(offre.start_time,"HH:mm:ss") && 
    
        //     moment(demande.time,"HH:mm:ss") <  moment(offre.end_time,"HH:mm:ss")
    
        //     )})




         setListOffresMatching(res.data.filter(offre=>
            
        offre.type_activite==data.type_activite 
        &&

        Math.abs(data.localisationX-offre.localisationX)<=offre.perimetre
        
        &&

        moment(offre.start_day) <= moment(data.date).isoWeekday() && 

        moment(data.date).isoWeekday()  <=  moment(offre.end_day) && 

        moment(data.time,"HH:mm:ss") >  moment(offre.start_time,"HH:mm:ss") && 

        moment(data.time,"HH:mm:ss") <  moment(offre.end_time,"HH:mm:ss")

        ))
 
    
    })
    .catch(e=>console.error({e}))


 },[])


    return (
        <div className="  flex  flex-col flex-auto space-y-1 p-8 ring-2 ring-gray-100  bg-gradient-to-l from-white to-white border-2 border-gray-50  rounded-xl shadow-xl" style={{ fontFamily: "Montserrat" }}>

            <div className="flex justify-center">
                <h1 className={`md:text-2xl text-lg text-gray-50 ${true ? 'bg-green-500 ' : 'bg-gray-400'} p-2 px-4 rounded-full flex items-center `} style={{ fontWeight: "600" }}>Demande : #{id} <p className="text-sm px-4"> </p></h1>

            </div>


            <div className={`${false && 'opacity-40 transition-opacity duration-500 ease-linear'}`}>

                <div className="Type Activite">

                    <p className="capitalize text-sm text-gray-400 " style={{ fontWeight: "500" }}>Type activite</p>

                    <div className="p-3 space-y-2" style={{ fontWeight: "700" }}>
                        <div className="flex items-center  space-x-2 text-gray-100  capitalize text-xl" >
                            <FaHandsHelping className="w-6 h-6 text-blue-600" />
                            <div className="text-blue-600">
                                <p >{data.type_activite}</p>
                               
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
                            <p >{data.date.dayOfMonth}-{data.date.month}-{data.date.year}</p>
                            
                             
                            </div>
                            
                        </div>


                    </div>

                    <p className="capitalize text-sm text-gray-400 " style={{ fontWeight: "500" }}>Heure </p>

<div className="p-3 space-y-2" style={{ fontWeight: "700" }}>
    <div className="flex items-center  space-x-2 text-gray-100  capitalize text-xl" >
        <div className="text-blue-600 flex ">
       
        <span className="text-lg text-blue-600 " style={{ fontWeight: "700" }}>{data.time.hour}h</span>

<span className="text-lg  text-blue-600" style={{ fontWeight: "700" }}>{data.time.minute}</span>         
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
     

               

<div
                    onClick={() => {
                        setDataForModal({
                            offre: id, text: 'voulez vous vraiment supprimer cette offre?', color: 'bg-red-600', yesMethod: () => {

                                // console.log(id)

                                console.log(`email:${userInfo }`)

                                axios.delete(`https://helpify-back.herokuapp.com/user/${userInfo.email}/demande/delete/${id}`

                                ).then(res => {
                                    if (res.status == 200) {
                                        setRefresh(nanoid(21))
                                        console.log("success")
                                    }

                                })
                                    .catch(e => console.error({ errorindelete: e }))

                            }
                        }); setOpenModal(true)
                    }}>

                    <IconTrash w={5} h={5} />
                </div>

                <div 
                className="flex  space-x-2 items-center" 
                onClick={()=>setOpenModalOffres(true)}>

<IconOffreur w={5} h={5}/> {listOffresMatching.length}


                </div>

                {
                    openModal &&
                    <Modal data={dataForModal}     openModalHook={[openModal, setOpenModal]} />
                }

            </div>


        </div>
    )
}

export default Disponibilte