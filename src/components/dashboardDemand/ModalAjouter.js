import React, { useState, useEffect } from 'react'
import { dataActivity, dataDays, dataHours, dataMobility } from '../../data/dataModalAjouter';
import { IconCloseModal } from '../svg/mainIcons';
import Flatpickr from "react-flatpickr";
import Select from "react-select"
import DatePicker from "react-datepicker";
import DateTimePicker from 'react-datetime-picker';
import "react-datepicker/dist/react-datepicker.css";
import { MapWithCircle } from '../map/MapWithCircle';
import { MapWithMarker } from '../map/MapWithMarker'
import { customAlphabet } from 'nanoid'
import MapBox from '../map/MapBox';
import axios from 'axios';
const nanoid = customAlphabet('1234567890', 5)





const ModalAjouter = ({ openModalHook, setListDemandes, listDemandes,userInfo ,setRefresh}) => {
   
  
    const [startDate, setStartDate] = useState( new Date());

    let handleColor = time => {
      return time.getHours() > 12 ? "text-success" : "text-error"
    }


    useEffect(() => {

        console.log({ startDate })
    },
        [startDate])
        const [mounted, setMounted] = useState(true);
      
        const toggle = () => setMounted(!mounted);
    const [openModal, setOpenModal] = openModalHook

   


    const [position, setPosition] = useState({ lat: 35.6475, lng: -5.7886 });

    const [perimeterForMap, setPerimtreForMap] = useState(1);


    const [choosedData, setChoosedData] = useState({

        id: nanoid(),
        isActive: true,
        typeActivity: {
            id: 1,
            title: "",
            
        },

 date:new Date(),
 

        localisation:{
            lng:-5.2,
            lat:-3.2
        }
        ,
        titre:''
      ,
      description:"pas de description disponible"

    })
    const [etape, SetEtape] = useState(1);

    useEffect(() => {

        console.log({ choosedData })
    },
        [choosedData])



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
            <div className={`absolute z-30 top-12 md:right-20 md:left-20 left-10 right-10 bg-white flex flex-col p-3  transform scale-${ModalScale}  transition-transform ease-in rounded-xl`} style={{ transitionDuration: "200ms" }}>
                <button className="absolute right-3 top-2 hover:text-red-400  " onClick={() => setOpenModal(false)}><IconCloseModal /></button>

                <div className=" flex flex-col   " style={{ minHeight: "500px" }}>

                    {etape == 1 &&
                        <div className="TypeActivite">
                            <h2 className="text-gray-700 text-center p-2 ">Etape 1 : choisir type d'activite</h2>
                            <div className="flex flex-wrap    gap-4">
                                {
                                    dataActivity.map(item => (
                                        <button className={`md:w-60 w-full border-2  rounded-lg  hover:border-blue-500    `} onClick={() => setChoosedData(choosedData => ({ ...choosedData, typeActivity: { id: item.id, title: item.title } }))} key={item.id}>
                                            <img className="md:w-60 w-full h-60  object-cover" src={item.imgUrl} />
                                            <h4 className="py-2 text-lg text-gray-500">{item.title}</h4>
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                    }
                 
                 {etape == 2 &&
                        <div className="TypeActivite flex flex-col items-center flex-1 space-y-5 justify-center ">
                            <h2 className="text-gray-800 font-semibold  ">Etape 2 : choisir une   localisation:</h2>

                            {/* <MapWithMarker positionHook={[position, setPosition]} /> */}


                            <MapBox setPosition={setPosition} position={position} />



                        </div>
                    }
                    {etape == 3 &&
                        <div className="TypeActivite flex flex-col items-center flex-1 space-y-5 justify-center ">
                            <h2 className="text-gray-800 font-semibold ">Etape 3 </h2>
                      
                            <div>
                            <h1 className="text-gray-800 font-semibold ">Veuillez décrire votre demande :</h1>
                            <textarea
                            onChange={e=>setChoosedData({...choosedData,description:e.target.value})}
                            
                            name="comments" id="comments" cols="80" rows="4" class="bg-gray-200  m-8"  placeholder="Description de la demande">
                            </textarea>
                            </div>
                        </div>
                    }
                    {etape == 4 &&
                        <div className="TypeActivite flex flex-col items-center flex-1 space-y-5 justify-center ">
                            <h2 className="text-gray-700 ">Etape 4 : choisir votre cadre temporel:</h2>
                    
                            <div className="flex space-x-4 items-center">
                            <DatePicker
      showTimeSelect
    
      selected={startDate}
      onChange={date =>{ setStartDate(date);setChoosedData({...choosedData,date:date }) }}
      timeClassName={handleColor}

    />
    <p>{handleColor}</p>
                          

                            </div>



                        </div>
                    }





                    <div className=" flex flex-wrap justify-center  scla space-x-4 p-2 mt-4 ">
                        <button onClick={() => SetEtape(etape + 1)} className={`p-2 bg-blue-600  ${etape == 4 && 'hidden'} hover:opacity-50 w-40 text-gray-50 rounded-3xl`}>Continuer</button>

                        <button className={`p-2  bg-blue-600   ${etape != 4 && 'hidden'} hover:opacity-50 w-40 text-gray-50 rounded-3xl`} onClick={() => { 
                         

                         const url = {
                            remote: "https://helpify-back.herokuapp.com/user",
                            local: "http://localhost:8081/user"
                        }
                         
                         const dataToSend = {


                            id:nanoid(),
                            titre:choosedData.titre,
                            description:choosedData.description,
                            type_activite: choosedData.typeActivity.title,
                            date:`${choosedData.date.getFullYear()}-0${choosedData.date.getMonth()+1}-0${choosedData.date.getDay()-1}`,
                            time:`${choosedData.date.getHours()}:${choosedData.date.getMinutes()}`,
                            localisationX: position[0],
                            localisationY: position[1],
                            etat: "active",
                        
                        
                        }

                        console.table(dataToSend)

                        axios.post(`https://helpify-back.herokuapp.com/user/${userInfo.email}/demande/add`, dataToSend)
                            .then(res => {
                                console.log({ res: res.data })
                                if (res.status === 200) {
                                    setOpenModal(false);
                                   setRefresh(nanoid())


                                }

                            })
                            .catch(e => console.error({ e }))

                         }}>Confirmer</button>
                        <button onClick={() => SetEtape(etape > 1 ? etape - 1 : 1)} className={`p-2   w-40 bg-gray-200 hover:opacity-50 text-gray-600 rounded-3xl`}>precedent</button>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default ModalAjouter