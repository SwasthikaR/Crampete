import lr from "../carimages/low_rent.png"
import fc from "../carimages/fast_car.png"
import sc from "../carimages/safe_car.png"
import qk from "../carimages/quick.png"
import "../carcss/choose.css"
function Choose(){
    return(
        <div className="choosemain">
            <div className="heading">
                <h1>Why choose Us</h1>
                <p>It is a long established fact that a reader will be distracted by the</p>
            </div>
            <div className="chooseback">
                <div className="chooseicon">
                    <div className="cicon">
                        <img src={lr}></img>
                        <p>Low Rent</p>
                    </div>
                    <div className="cicon">
                        <img src={fc}></img>
                        <p>Fast Car</p>
                    </div>
                    <div className="cicon">
                        <img src={sc}></img>
                        <p>Safe Car</p>
                    </div>
                    <div className="cicon">
                        <img src={qk}></img>
                        <p>Quick Support</p>
                    </div>
                </div>
                <div className="choosebut">
                    <button>Read More</button>
                </div>
            </div>
        </div>
    )
}
export default Choose