import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Disponibilte from './components/dashboardDemand/disponibilite'
import Navbar from './components/navbar2'
import { BsPencilSquare } from "react-icons/bs"
import { IconAdd } from './components/svg/mainIcons'
import ModalAjouter from './components/dashboardDemand/ModalAjouter'
import { dataOffres } from './data/dataHelper'

const Dashboard = () => {

    


    const [userInfo, setUserInfo] = useState({ id: 1, name: "hamid" });
    const [openModal, setOpenModal] = useState(false)
    const [listDemandes, setListDemandes] = useState([])

    useEffect(() => {


        const url = {
            remote: "https://helpify-back.herokuapp.com/findUser",
            local: "http://localhost:8081/findUser"
        }


        axios.get(url.remote + "?email=" + localStorage.getItem("email")).then(
            res => {

                setUserInfo(res.data)
            })



    }, [])




    return (

        <div className="flex flex-col  w-full space-y-5" style={{ fontFamily: "Montserrat" }}>


            <div className="Navbar w-full    " >
                <Navbar isHelper={false} userInfo={userInfo} />
                <main className="w-full flex flex-col  h-screen p-6 md:p-10 space-y-3  bg-gray-50  ">



                <div className="flex flex-wrap justify-between p-7">
                    <div className="flex  items-center space-x-4 pb-4 " >
                        <span className="text-gray-400 capitalize">Bonjour</span>

                        <h2 className="text-lg  md:text-2xl uppercase   text-gray-600 italic" style={{ fontWeight: "700" }}>
                            {userInfo.prenom}, {userInfo.nom}
                        </h2>
                    </div>

                    <button onClick={() => setOpenModal(true)} className="   flex items-center space-x-4 p-3 md:mb-0 mb-10 md:w-auto w-full   px-10 bg-blue-600 cursor-pointer hover:bg-blue-800  text-white  capitalize rounded-md ">
                        <IconAdd w={6} h="6" />
                        <p>Nouvelle Demande</p>
                    </button>
                    {
                        openModal &&
                        <ModalAjouter openModalHook={[openModal, setOpenModal]} setListDemandes={setListDemandes} listDemandes={listDemandes} />

                    }
                </div>



                <div className="ALL Demandes ">
                    <h2 className="text-lg text-gray-400 py-2 capitalize border-b w-96 pb-2">toutes les Demandes</h2>

                    <div className="md:grid grid-cols-2  gap-8 md:space-y-0 space-y-5">

                        {
                            listDemandes.map(item => (
                                <Disponibilte id={item.id} data={item} listDemandes={listDemandes} setListDemandes={setListDemandes} />

                            ))
                        }

                        {listDemandes.length == 0 && <p className="text-sm font-semibold p-5 text-gray-500">Vous n'avez pas encore de demandes , Cliquer sur 'Nouvelle Demande' pour ajouter une ! </p>}



                    </div>

                </div>



            </main>

            </div>



        </div>

    )
}

export default Dashboard