import React, { useRef, useState } from "react";
import Data from './Data.json'
import './MangeApplicants.css'
import Navbar from "../../../components/Navbar";
function MangeApplicants() {
const [data, setData] = useState(Data)
const [editState, setEDitState]= useState (-1)  
    return(
        <>
        <div>
            
            <h1 className="MAtitle">Mange Applicants</h1>
            <div className="tableWrap">
            <div>
                <AddApplicant setData={setData}/>
                <form className="form" onSubmit={handleUpdate}>
                <table>
                    
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>password</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    

                    
                        {
                            data.map((current)=> (
                            editState === current.id ? <EditApplicant key={current.id} current={current} data={data} setData={setData}/> : 
                                
                                <tr key={current.id}>
                                    <td>{current.name}</td>
                                    <td>{current.email}</td>
                                    <td>{current.password}</td>
                                    <td>{current.phone}</td>
                                    
                                    <td>
                                        <button className="btn" type="button" onClick={()=>handleEvent(current.id)}>Edit</button>
                                        <button className="btn1" type="button" onClick={()=>handleDelete(current.id)}>Delete</button>
                                        
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
        const name =event.target.elements.name.value
        const email =event.target.elements.email.value
        const password =event.target.elements.password.value
        const phone =event.target.elements.phone.value
        const updatedData =data.map((d)=>d.id ===editState ? {...d,name :name,email:email,phone:phone,password:password}:d)
        setData(updatedData)
        setEDitState(-1)
        
    }
    function handleDelete (id){
        const updatedData = data.filter((d)=> id !==d.id)
        setData(updatedData)
    }
}


function EditApplicant({current,data,setData}) {
    function handleName(event){
        const name = event.target.value
        const updatedData = data.map((d)=> d.id===current.id ? {...d,name:name }: d)
        setData(updatedData)
    }   

    function handleEmail(event){
        const email = event.target.value
        const updatedData = data.map((d)=> d.id===current.id ? {...d,email:email }: d)
        setData(updatedData)
    }
    function handlePassword(event){
        const password = event.target.value
        const updatedData = data.map((d)=> d.id===current.id ? {...d,password:password }: d)
        setData(updatedData)
    }  

    function handlePhone(event){
        const phone = event.target.value
        const updatedData = data.map((d)=> d.id===current.id ? {...d,phone:phone }: d)
        setData(updatedData)
    }  
    return(
        <tr >
            
                    <td><input className="text1"  required type="text"  onChange={handleName} value={current.name} name="name" placeholder="Enter Name" ></input></td>
                    <td><input className="text1" required type="text"  onChange={handleEmail} value={current.email} name="email" placeholder="Enter Email" ></input></td>
                    <td><input className="text1" required type="text"  onChange={handlePassword} value={current.password} name="password" placeholder="Enter password" ></input></td>
                    <td><input className="text1" required type="text"  onChange={handlePhone} value={current.phone} name="phone" placeholder="Enter Phone" ></input></td>
                    <td><button className="btn" type="submit">Update</button></td>
            
        </tr>

    )
}
// add
function AddApplicant({setData}) {
    const nameRef =useRef()
    const emailRef =useRef()
    const passwordRef =useRef()
    const phoneRef =useRef()


    function handleClick(event) {
        event.preventDefault();
        const name =event.target.elements.name.value;
        const email =event.target.elements.email.value;
        const password =event.target.elements.password.value;
        const phone =event.target.elements.phone.value ;
        const newApplicant = {
            id : Math.random(),
            name,
            email,
            password,
            phone,
        }  
        setData(prevData =>prevData.concat(newApplicant))   
        nameRef.current.value= ''
        emailRef.current.value= ''
        passwordRef.current.value=''
        phoneRef.current.value= ''


    }
        return(
            <form className="add" onSubmit={handleClick}>
                <input className="text1" required type="text" name="name" placeholder="Name" ref={nameRef}></input>
                <input className="text1" required type="text" name="email" placeholder="Email" ref={emailRef}></input>
                <input className="text1" required type="text" name="password" placeholder="password" ref={passwordRef}></input>
                <input className="text1" required type="text" name="phone" placeholder="Phone" ref={phoneRef}></input>
                {/* <input type="file" id="file1" name="upload"></input> */}
                <button className="btn" >Add</button>
            </form>
        )   
}
export default MangeApplicants