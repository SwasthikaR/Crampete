import "../carcss/customer.css"
function Customer(props3){
    return(
        <div className="custmain">
         <div className="custcont">
            <p>{props3.para}</p>
         </div>
         <div className="custicon">
            <h3>{props3.head}</h3>
            <p>{props3.by}</p>
         </div>
        </div>
    )
}

export default Customer