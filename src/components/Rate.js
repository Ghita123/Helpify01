import React ,{useState}from 'react'   
import useCollapse from 'react-collapsed';
function Rate() {
  const [data,setData]=useState(null)
const [print,setPrint]=useState(false)

  function getData(val)
  {
    console.warn(val.target.value)
    setData(val.target.value)
    setPrint(false)
  }
 
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

 
    return (

    <div class="m-30">
    <div>
      <button
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      <section {...getCollapseProps()}>
        
      <div class="h-screen m-20 ">
        <div class="w-3/4 rounded-lg shadow-lg bg-gradient-to-r from-purple-700 to-teal-600">
         <div class="border-b border-purple-700 text-blue-100">
    <div class="p-4">X</div>
    
    <div class="relative p-4 pl-20">
    <img src="https://placekitten.com/g/50/50" class="absolute top-0 left-0 ml-4 mt-4 rounded-full"></img>
    <textarea class="bg-transparent pt-4 w-full text-white text-lg outline-none" placeholder="Quesque vous en penser ?" rows="5" onChange={getData}></textarea>

  </div>
  <div class="pl-20 pb-4 pr-4 flex justify-between">
  <div class="flex text-2xl items-center">
      <div class="mr-2">🙂</div>
      <div class="mr-2">😝</div>
      <div class="mr-2">🤯</div>
      <div>🥰</div>
    </div>
    <button class="bg-purple-700 rounded-full text-blue-100 inline-block py-2 px-4" onClick={()=>setPrint(true)}>Publier</button>
    </div>
     </div></div>
  </div></section>

     


  
</div>
<div class="p-6 border border-teal-300 bg-white shadow-lg rounded-lg m-5  " >

{
       print?
       <h1> {data}</h1>
       :null
     }
     </div>
     
</div>)}
export default Rate;