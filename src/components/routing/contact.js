import { useParams } from "react-router-dom"
import axios from "axios";
import { useState,useEffect } from "react";
function Contact(){
    const [api,setApi]=useState([]);
    const {id} = useParams();
    const [load,setLoad]=useState(true);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            setLoad(false);
            setApi(res.data);
        })
        .catch(()=>{
            setApi([]);
        })
    },[])
    
    //Finding the object using id
    const specificObj = api.find(obj => obj.id === parseInt(id) );
    if(specificObj){
        return(
            <div>
                {load && "Loading..........."}
                <h2>DETAILS OF THE PERSON WITH ID {specificObj.id}</h2>
                <p><span style={{font:"initial",fontWeight:"bold",fontSize:"18px"}}>Name:</span> {specificObj.name}</p>
                <p><span style={{font:"initial",fontWeight:"bold",fontSize:"18px"}}>Username:</span> {specificObj.username}</p>
                <p><span style={{font:"initial",fontWeight:"bold",fontSize:"18px"}}>Email ID:</span> {specificObj.email}</p>
            </div>
        )
    }
}
export default Contact