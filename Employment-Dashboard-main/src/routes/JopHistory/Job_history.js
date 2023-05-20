import { useState } from 'react';
import"./Job_history.css";
import{Link,Navigate, useNavigate} from'react-router-dom'
import Navbar from '../../components/Navbar';

function Job_history(){
               
    const [cards] = useState([
            {
            title: "Position-1",
            Text: "Democracy is aform of government in which the people ",
            max_candidate_number:"candidate number 3",
            },
            {
            title: "Position-2",
            Text: " Democracy is aform of government in which the people ",
            max_candidate_number:"candidate number 4",
            },
            {
                title: "Position-3",
                Text: " Democracy is aform of government in which the people ",
                max_candidate_number:"candidate number 5",
            },
            {
            title: "Position-4",
            Text: " Democracy is aform of government in which the people ",
            max_candidate_number:"candidate number 31",
            },
            {
            title: "Position-5",
            Text: " Democracy is aform of government in which the people ",
            max_candidate_number:"number 23",
            }
        
        ])
        return (
            <>
            <div>
            <section>
                <div>
                <h1 className='JHtitle'>Jobs History</h1>
                </div>
            <div className="container">

                <div className="cards">
                {
                cards.map((cards,i) =>(
    
                <div key={i} className="card">
    
                <h3>{cards.title}</h3>
                <p>{cards.Text}</p>
                <p>{cards.max_candidate_number}</p>
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

export default Job_history;