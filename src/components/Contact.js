import {useEffect, useState} from 'react';
import Axios from "axios";


function Contact(){
    const [name, setName] = useState("John Doe");
    const [data, setData] = useState([]);
    const handleClick = () => {
        setName("Ravi");
    }
    
    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status === 200){
                console.log(res.data);
                setData(res.data);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err))
    },[])

    const ContactDetails = () => {
        return data.map((val)=>{
            return <p>{val.name} - {val.phone}</p>
        })
    }

    return(
        <div>
            <h1>The owner of this page is {name}</h1>
            <button onClick={handleClick}>Change owner</button>
            {ContactDetails()}
        </div>
    )
}
export default Contact;