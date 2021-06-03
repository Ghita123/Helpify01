import axios from 'axios'
import React, { useState, useEffect } from 'react'
import moment from "moment"

function Testnot() {



const [Listnotification, setListNotification] = useState([])
const [a, setA] = useState(2)




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
    typeActivite:"divers"
 }





 useEffect(()=>{
    
  
    

    axios.get("https://helpify-back.herokuapp.com/offre/offres")
    .then(res=>{
        console.log({allOffres : res.data}); 


        const FoundOffre = res.data.find(offre=>{
            
        if(
        offre.type_activite==demande.type_activite &&

        Math.abs(demande.localisationX-offre.localisationX)<=offre.perimetre &&

        moment(offre.start_day) <= moment(demande.date).isoWeekday() && 

        moment(demande.date).isoWeekday()  <=  moment(offre.end_day) && 

        moment(demande.time,"HH:mm:ss") >  moment(offre.start_time,"HH:mm:ss") && 

        moment(demande.time,"HH:mm:ss") <  moment(offre.end_time,"HH:mm:ss")

       
        )
        console.log({FoundOffre })

        else console.log("NotFound")

       

        })
 
    
    })
    .catch(e=>console.error({e}))


 },[])
  return (

    
    <div>
        notification page

        {a}
    </div>


  );
}

export default Testnot;