import React, { useRef, useState } from "react";
import Data from './DescriptionJobData.json'
import './DescriptionJobData.css'
import Navbar from "../../../components/Navbar";

function DescriptionJob() {
const [data, setData] = useState(Data)
const [editState, setEDitState]= useState (-1)  
    return(
        <>
        <h1 className="Jtitle" >Description for jobs</h1>
        <div>
            <div className="filter">
            </div>
            <div className="tableWrap">

            <div>
                <AddApplicant setData={setData}/>
                <form className="form" onSubmit={handleUpdate}>
                <table>
                    
                    <tbody>
                        <tr>
                            
                            <th>Description</th>
                            <th>Qualification</th>
                            <th>Action</th>
                        </tr>
                    

                    
                        {
                            data.map((current)=> (
                                editState === current.id ? <EditApplicant key={current.id} current={current} data={data} setData={setData}/> : 
                                
                                <tr key={current.id}>
                                    
                                    <td>{current.Description}</td>
                                    <td>{current.qual}</td>
                                    <td>
                                        <button type="button" className="btn" onClick={()=>handleEvent(current.id)}>Edit</button>
                                        <button type="button" className="btn1" onClick={()=>handleDelete(current.id)}>Delete</button>
                                    </td>
                                </tr>
                            
                                ))
                        }
                    </tbody>

                </table>
                </form>
            </div>
            
            </div>
        </div>
        </>
    )
    function handleEvent(id) {
        setEDitState(id) 

    }

    function handleUpdate (event){
        event.preventDefault()
        const Description =event.target.elements.Description.value
        const qual =event.target.elements.qual.value
    
        const updatedData =data.map((d)=>d.id ===editState ? {...d,Description:Description,qual:qual}:d)
        setData(updatedData)
        setEDitState(-1)
        
    }
    function handleDelete (id){
        const updatedData = data.filter((d)=> id !==d.id)
        setData(updatedData)
    }
}


function EditApplicant({current,data,setData}) {

    function handleDescription(event){
        const Description = event.target.value
        const updatedData = data.map((d)=> d.id===current.id ? {...d,Description:Description }: d)
        setData(updatedData)
    }  

    function handlequal(event){
        const qual = event.target.value
        const updatedData = data.map((d)=> d.id===current.id ? {...d,qual:qual }: d)
        setData(updatedData)
    }
    

    return(
        <tr >
            
                    <td><input className="text1" required type="text"  onChange={handleDescription} value={current.Description} name="Description" placeholder="Enter Description" ></input></td>
                    <td><input className="text1" required type="text"  onChange={handlequal} value={current.qual} name="qual" placeholder="Enter qualification" ></input></td>
                    <td><button className="btn" type="submit">Update</button></td>
            
        </tr>

    )
}
// add
function AddApplicant({setData}) {
    const DescriptionRef =useRef()
    const qualRef =useRef()



    function handleClick(event) {
        event.preventDefault();
        const Description =event.target.elements.Description.value;
        const qual =event.target.elements.qual.value ;
        const newApplicant = {
            id : Math.random(),
            Description,
            qual
        }  
        setData(prevData =>prevData.concat(newApplicant))   
        DescriptionRef.current.value= ''
        qualRef.current.value= ''

    
    }
        return(
            <form className="add" onSubmit={handleClick}>
                <input  className="text1" required type="text" name="Description" placeholder="Description" ref={DescriptionRef}></input>
                <input  className="text1" required type="text" name="qual" placeholder="Qualification" ref={qualRef}></input>
                {/* <input type="file" id="file1" name="upload"></input> */}
                <button className="btn">Add</button>
            </form>
        )   
        
}
export default DescriptionJob;