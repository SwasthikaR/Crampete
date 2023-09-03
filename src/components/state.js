import { useState } from "react";
function State(){
    const [text,setText] = useState("Hello");
    const [obj,setObj] = useState({
        fname:"Swasthika",
        lname:"R",
        age:19
    })
    function change(){
        let copy = {...obj};
        copy.age += 1;
        setObj(copy)
    }
    return(
        <div>
        <div>
            <h1>{text}</h1>
            <button onClick={function(){setText("Text changed")}}>Click Me</button>
        </div>
        <div>
            <h2>{obj.fname}</h2>
            <h2>{obj.lname}</h2>
            <h2>{obj.age}</h2>
            <button onClick={change}>Add Age</button>
        </div>
        </div>
    )
}

export default State