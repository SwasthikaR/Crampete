import "../carcss/abtcar.css"
import abtimg from "../carimages/about-img.png";
function Abtcar(){
    return(
        <div className="abt">
            <div className="abtimg">
                <img src={abtimg}></img>
            </div>
            <div className="abtryt">
                <div className="abtcont">
                    <h1>About Our Cars</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
                    <button>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Abtcar