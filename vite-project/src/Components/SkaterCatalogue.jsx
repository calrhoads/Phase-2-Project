import React from "react"
import SkaterCards from "./SkaterCards"
import NewSkaterForm from './NewSkaterForm'

function SkaterCatalogue({skaterList,patchSkatersFollowingStatus,search,setSkaterList}){
    const filteredSkaters = skaterList.filter((skater)=> {
        return skater.name.toLowerCase().includes(search.toLowerCase())
    })
    
    const mappedSkaters = filteredSkaters.map(skater => {
        console.log(deleteSkater)
        return <SkaterCards key={skater.id} skater={skater} patchSkatersFollowingStatus={patchSkatersFollowingStatus} deleteSkater={deleteSkater}/>
    })

    function addSkater(newSkater){
        // setSkaterList(...skaterList,newSkater)
            fetch('http://localhost:3000/Skaters',{
              method:"POST",
              headers: {
                "Content-Type": "application/json"
              },
              body:JSON.stringify(newSkater)
            })
            .then(r=>r.json())
            .then(data=>setSkaterList([...skaterList,data]))
          }
    
    function deleteSkater(id) {
        fetch(`http://localhost:3000/Skaters/${id}`,{
            method : "DELETE"
        })
        .then(r=>{
        const deleteArr = skaterList.filter((skater)=>{
        return skater.id !== id
            })
    setSkaterList(deleteArr)
        })
    }

    return(
        <>
        <NewSkaterForm addSkater={addSkater} />
        <h2 className="proskaters">Pro Skaters</h2>
        <div className="skater-catalogue">
            {mappedSkaters}
        </div>
        </>
    )
}

export default SkaterCatalogue