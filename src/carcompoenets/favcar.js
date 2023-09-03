import "../carcss/favcar.css"
function Favcar(props4){
    return(
    <div className="circle">
        <div className="cirimg">
            <img src={props4.car}></img>
        </div>
        <div className="circont">
            <h3>{props4.hd}</h3>
            <p>{props4.par}</p>
        </div>
        <div className="cirbut">
            <button>{props4.butt}</button>
        </div>
    </div>
    )
}

export default Favcar