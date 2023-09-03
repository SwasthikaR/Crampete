import { useState, useEffect } from "react";
import axios from "axios";
import {Link } from "react-router-dom"
function Useff(){
    const [use,setUse] = useState([]);
    const [load,setLoad] = useState(true);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            setLoad(false);
            setUse(res.data);
        })
        .catch(()=>{
            setUse([]);
        })
    },[])
    return(
        <div>
          <h1>API Call</h1>
          {load && "Loading..................."}
          {
            
            use.map((ele)=>{
            return<Link to={`/contact/${ele.id}`} style={{display:"block"}}>{ele.id}. {ele.name}</Link>})

        }
        </div>
    )
}

export default Useff