import React, { useRef, useState } from "react";
import Data from './ManageJobsData.json'
import './ManageJob.css'
import Navbar from "../../../components/Navbar";
import { Link } from "react-router-dom";
import Pending from "../../Pending/src/Pending";

function ManageJob() {
const [data, setData] = useState(Data)
const [editState, setEDitState]= useState (-1)  
    return(
        <>
        <h1 className="MJtitle">Manage jobs</h1>
        <div className="mangeApplicants"> 
            <div className="tableWrap">
            <div>
                <AddApplicant setData={setData}/>
                <form className="form" onSubmit={handleUpdate}>
                <table>
                    
                    <tbody>
                        <tr>
                            <th>Position</th>
                            <th>Description</th>
                            <th>Offer</th>
                            <th>Max Number</th>
                            <th>Qualifications</th>
                            <th>Action</th>
                        </tr>
                    

                    
                        {
                            data.map((current)=> (
                                editState === current.id ? <EditApplicant key={current.id} current={current} data={data} setData={setData}/> : 
                                
                                <tr key={current.id}>
                                    <td>{current.Position}</td>
                                    <td>{current.Description}</td>
                                    <td>{current.Offer}</td>
                                    <td>{current.Max_candidate_number}</td>
                                    <td className="display">
                                        <button type="button" className="btn"  onClick={()=>handleEvent(current.id)}>Edit</button>
                                        <Link to={"/Pending"}>
                                            <button className="btn2"  type="button" >Pending</button>
                                        </Link>
                                        <button type="button" className="btn1"  onClick={()=>handleDelete(current.id)}>Delete</button>
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
        const Position =event.target.elements.Position.value
        const Description =event.target.elements.Description.value
        const Offer =event.target.elements.Offer.value
        const Max_candidate_number =event.target.elements.Max_candidate_number.value
     
        const updatedData =data.map((d)=>d.id ===editState ? {...d,Position :Position,Description:Description,Offer:Offer,Max_candidate_number:Max_candidate_number}:d)
        setData(updatedData)
        setEDitState(-1)
        
    }
    function handleDelete (id){
        const updatedData = data.filter((d)=> id !==d.id)
        setData(updatedData)
    }
}


function EditApplicant({current,data,setData}) {
    function handlePosition(event){
        const Position = event.target.value
        const updatedData = data.map((d)=> d.id===current.id ? {...d,Position:Position }: d)
        setData(updatedData)
    }   

    function handleDescription(event){
        const Description = event.target.value
        const updatedData = data.map((d)=> d.id===current.id ? {...d,Description:Description }: d)
        setData(updatedData)
    }  

    function handleOffer(event){
        const Offer = event.target.value
        const updatedData = data.map((d)=> d.id===current.id ? {...d,Offer:Offer }: d)
        setData(updatedData)
    }
    
    function handleMax_candidate_number(event){
        const Max_candidate_number = event.target.value
        const updatedData = data.map((d)=> d.id===current.id ? {...d,Max_candidate_number:Max_candidate_number }: d)
        setData(updatedData)
    }
    
    function handleQualifications(event){
        const Qualifications = event.target.value
        const updatedData = data.map((d)=> d.id===current.id ? {...d,Qualifications:Qualifications }: d)
        setData(updatedData)
    }
      
    return(
        <tr >
                    <td><input className="text1" required type="text"  onChange={handlePosition} value={current.Position} name="Position" placeholder="Enter Position" ></input></td>
                    <td><input className="text1" required type="text"  onChange={handleDescription} value={current.Description} name="Description" placeholder="Enter Description" ></input></td>
                    <td><input className="text1" required type="text"  onChange={handleOffer} value={current.Offer} name="Offer" placeholder="Enter Offer" ></input></td>
                    <td><input className="text1" required type="text"  onChange={handleMax_candidate_number} value={current.phone} name="Max_candidate_number" placeholder="Enter Max candidate number" ></input></td>
                    <td><input className="text1" required type="text"  onChange={handleQualifications} value={current.Qualifications} name="Qualifications" placeholder="Enter Qualifications" ></input></td>
                    <td><button className="btn"  type="submit">Update</button></td>
        </tr>

    )
}
// add
function AddApplicant({setData}) {
    const PositionRef =useRef()
    const DescriptionRef =useRef()
    const OfferRef =useRef()
    const Max_candidate_numberRef =useRef()


    function handleClick(event) {
        event.preventDefault();
        const Position =event.target.elements.Position.value;
        const Description =event.target.elements.Description.value;
        const Offer =event.target.elements.Offer.value ;
        const Max_candidate_number =event.target.elements.Max_candidate_number.value ;
        const newApplicant = {
            id : Math.random(),
            Position,
            Description,
            Offer,
            Max_candidate_number
        }  
        setData(prevData =>prevData.concat(newApplicant))   
        PositionRef.current.value= ''
        DescriptionRef.current.value= ''
        OfferRef.current.value= ''
        Max_candidate_numberRef.current.value= ''
    
    }
        return(
            <form className="add" onSubmit={handleClick}>
                <input required className="text1" type="text" name="Position" placeholder="Position" ref={PositionRef}></input>
                <input required className="text1" type="text" name="Description" placeholder="Description" ref={DescriptionRef}></input>
                <input required className="text1" type="text" name="Offer" placeholder="Offer" ref={OfferRef}></input>
                <input required className="text1" type="text" name="Max_candidate_number" placeholder="Max number" ref={Max_candidate_numberRef}></input>
                {/* <input type="file" id="file1" name="upload"></input> */}
                <button className="btn" >Add</button>
            </form>
        )   
}
export default ManageJob;