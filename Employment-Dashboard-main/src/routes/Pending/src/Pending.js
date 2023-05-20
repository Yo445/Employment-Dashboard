import React ,{useState}from "react";
import Data from "./Data.json"
import Navbar from "../../../components/Navbar";
function Crud() {
const [data, setData] = useState(Data)
    return (
            <>
        <div >
            <table>
                <tbody>
                    <tr >
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th >Action</th>
                    </tr>
                
                
                    {
                        data.map((current) => (
                                <tr key={current.id}>
                                    <td>{current.name}</td>
                                    <td>{current.email}</td>
                                    <td>{current.phone}</td>
                                    <td>
                                        <button type="button"className="btn" onClick={() => handleAccept(current.id)}>Accept</button>
                                        <button type="button"className="btn1" onClick={() => handleReject(current.id)}>Reject</button>
                                    </td>
                                </tr>

                        ))
                    }

            </tbody>
        </table>

        
                </div >
    </>
    )
    function handleAccept(id){
        const eventId=id
        
    }

    function handleReject(id){
        const eventId=id
    }
}
export default Crud