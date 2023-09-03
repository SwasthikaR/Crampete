import "./card.css"
function Card(props){
    return(
            <div className="child">
                 <img src={props.image}></img>
                 <p>{props.title}</p>
            </div>
    )
}

export default Card