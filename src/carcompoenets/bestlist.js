import "../carcss/bestlist.css"
function Bestlist(props1){
    return(
        <div className="bestlist">
            <div className="bestimg">
                <img src={props1.bestcar}></img>
            </div>
            <div className="rent">
                <h3>{props1.bestrate}</h3>
            </div>
        </div>
    )
}

export default Bestlist