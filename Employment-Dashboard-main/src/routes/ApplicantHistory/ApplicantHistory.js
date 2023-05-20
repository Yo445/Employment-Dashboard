import { useState } from 'react';
import"./ApplicantHistory.css";
import{Link,Navigate, useNavigate} from'react-router-dom'
import NavbarClient from '../../components/NavbarClient';
function ApplicantHistory(){

    const [cards] = useState([
            {
            title: "Youssef",
            Text: "Democracy is aform of government in which the people ",
            },
            {
            title: "Mohamed",
            Text: " Democracy is aform of government in which the people ",
            max_candidate_number:"candidate number 4",
            },
            {
                title: "Mostafa",
                Text: " Democracy is aform of government in which the people ",
            },
            {
            title: "Karim",
            Text: " Democracy is aform of government in which the people ",
            },
            {
            title: "Hazim",
            Text: " Democracy is aform of government in which the people ",
            }
            ,
            {
            title: "Abdela",
            Text: " Democracy is aform of government in which the people ",
            }
        
        ])
        return (
            <>
            <div>
            <section>
                <div >
                <h1 className='Atitle'>Applicant History</h1>
                </div>

            <div className="container">
                <div className="cards">
                {
                cards.map((cards,i) =>(
    
                <div key={i} className="card">
    
                <h3 >{cards.title}</h3>
                <p>{cards.Text}</p>
                </div> 
                ))
                }
            
            </div>
            </div>
        </section>
        </div>
        </>
        );






}

export default ApplicantHistory;