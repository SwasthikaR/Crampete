import { useState } from "react"
import "./todo.css"
function Todo(){
    const[task,setTask]=useState([]);
    return(
        <div>
            <h2>TO-DO LIST</h2>
            <input id="todo" type="text" placeholder="Enter the task"></input>
            <button onClick={
                ()=>{
                    let val = document.getElementById("todo").value;
                    let copy =[...task];
                    copy.push(val);
                    setTask(copy);
                    document.getElementById("todo").value="";
                }
            }>ADD</button>
            <ol>
                {
                    task.map((obj,uni)=>{
                        return(
                            <div key="uni">
                            <li >{obj}
                            <button onClick={()=>{
                                let val = document.getElementById("todo");
                                let copy =[...task];
                                let editval = prompt("Enter the value to be updated: ");
                                copy.splice(uni,1,editval);
                                setTask(copy);
                                
                            }}>EDIT</button>
                            <button onClick={()=>{
                                 let val = document.getElementById("todo");
                                 let copy =[...task];
                                 copy.splice(uni,1);
                                 setTask(copy);
                            }}>DELETE</button>
                            </li>
                            
                            </div>
                        )
                    })
                }
            </ol>
        </div>
    )
}
export default Todo