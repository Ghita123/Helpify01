import React, { useState, useEffect } from 'react'
import { dataActivity, dataDays, dataHours, dataMobility } from '../../data/dataModalAjouter';
import { IconCloseModal } from '../svg/mainIcons';

import Flatpickr from "react-flatpickr";
import Select from "react-select"


import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { MapWithCircle } from '../map/MapWithCircle';
import { MapWithMarker } from '../map/MapWithMarker'








const ModalEdit = ({ openModalHook, data, setListDemandes, listDemandes }) => {
    function LifecycleDemo() {

        return (<input placeholder="Entrez le nom complet"></input>);
      }
     
        const [mounted, setMounted] = useState(true);
      
        const toggle = () => setMounted(!mounted);
    const [openModal, setOpenModal] = openModalHook

    // date
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    // heure
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());

    const [position, setPosition] = useState({ lat: 35.6475, lng: -5.7886 });

    const [perimeterForMap, setPerimtreForMap] = useState(1);


    const [choosedData, setChoosedData] = useState(data)
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
                        <div className="TypeActivite flex flex-col items-center flex-1 space-y-5 ">
                            <h2 className="text-gray-800 font-semibold ">Etape 2 : choisir le bénificière de la demande</h2>
                            <div>
                             <input type="radio" id="moi" name="drone" value="moi"   ></input>
                             <label for="moi">Pour vous même</label>
                            </div>
                            <div>
                             <input type="radio" id="ami" name="drone" value="ami" onClick={toggle}></input>
                             <label for="moi">Pour un(e) ami(e) ou un membre de la famille</label>
                            </div>
                            <div>{mounted && <LifecycleDemo />}</div>
                        </div>
                    }
                    {etape == 3 &&
                        <div className="TypeActivite flex flex-col items-center flex-1 space-y-5 justify-center ">
                            <h2 className="text-gray-800 font-semibold  ">Etape 3 : choisir une   localization:</h2>
                            <MapWithMarker positionHook={[position, setPosition]} />
                        </div>
                    }
                    {etape == 4 &&
                        <div className="TypeActivite flex flex-col items-center flex-1 space-y-5 justify-center ">
                            <h2 className="text-gray-800 font-semibold ">Etape 4 : Veuillez décrire votre demande </h2>
                            <div>
                            <textarea name="comments" id="comments" cols="80" rows="4" class="bg-gray-200  m-8"  placeholder="Description de la demande">
                            </textarea>
                            </div>
                        </div>
                    }
                    {etape == 5 &&
                        <div className="TypeActivite flex flex-col items-center flex-1 space-y-5 justify-center ">
                            <h2 className="text-gray-700 ">Etape 5 : choisir votre cadre temporel:</h2>
                            <p>choisir la date </p>
                            <div className="flex space-x-4 items-center">
                                du
                                <Select
                                    className="w-40"
                                    options={dataDays}
                                    value={choosedData.daysFrame.start}
                                    onChange={selected => setChoosedData({ ...choosedData, daysFrame: { ...choosedData.daysFrame, start: selected } })}


                                />

                               a :
                             <Select
                                    className="w-40"

                                    options={dataDays}
                                    value={choosedData.daysFrame.end}
                                    onChange={selected => setChoosedData({ ...choosedData, daysFrame: { ...choosedData.daysFrame, end: selected } })}
                                />
                            </div>
                            <p>choisir l'heure:</p>
                            <div className="flex space-x-4 items-center">
                                du
                                <Select
                                    className="w-40"
                                    options={dataHours}
                                    value={choosedData.hoursFrame.start}
                                    onChange={selected => setChoosedData({ ...choosedData, hoursFrame: { ...choosedData.hoursFrame, start: selected } })}
                                />

                               a :
                             <Select
                                    className="w-40"
                                    options={dataHours}
                                    value={choosedData.hoursFrame.end}
                                    onChange={selected => setChoosedData({ ...choosedData, hoursFrame: { ...choosedData.hoursFrame, end: selected } })}


                                />
                            </div>



                        </div>
                    }

                    




                    <div className=" flex flex-wrap justify-center  scla space-x-4 p-2 mt-4 ">
                        <button onClick={() => SetEtape(etape + 1)} className={`p-2 bg-blue-600  ${etape == 5 && 'hidden'} hover:opacity-50 w-40 text-gray-50 rounded-3xl`}>Continuer</button>

                        <button className={`p-2  bg-blue-600   ${etape != 5 && 'hidden'} hover:opacity-50 w-40 text-gray-50 rounded-3xl`} onClick={() => { setListDemandes(listDemandes => [...listDemandes.filter(item => item.id != data.id), choosedData]); setOpenModal(false) }}>Confirmer</button>
                        <button onClick={() => SetEtape(etape > 1 ? etape - 1 : 1)} className={`p-2   w-40 bg-gray-200 hover:opacity-50 text-gray-600 rounded-3xl`}>precedent</button>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default ModalEdit