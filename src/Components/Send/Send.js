import React,{useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore";
import {db} from "../../Base"
import Footer from '../Footer/Footer';


function Send() {
    const [applicant, setApplicant] = useState([])

    
    const userCollectionRef = collection(db, "registration")

    const querry = query(userCollectionRef, orderBy("createdAt", "desc"))

    const getApplicants =  () => {
        onSnapshot(querry, (snapshot) => {
            const r = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setApplicant(r);
        });
    };


    useEffect(() => {
        getApplicants();
    }, []);
  return (
    <>
        <br/>
        <h2>PHONE NUMBERS</h2>
        <div style={{ width:'100%', display:'flex', flexWrap:'wrap'}}>
            {
                applicant.map(({id, phone}) => (
                    <td>
                        {phone}, 
                    </td>
                ))
            }
        </div>
        <br/>
        <h2>EMAILS</h2>
        <div style={{ width:'100%', display:'flex', flexWrap:'wrap'}}>
            {
                applicant.map(({id, phone, email}) => (
                    <span>
                         {email}, 
                    </span>
                ))
            }
        </div>
        <br/>
        <br/>
        <Footer />
    </>
  )
}

export default Send