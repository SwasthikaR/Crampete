import "../carcss/request.css"
import loc from "../carimages/location.png"
import ph from "../carimages/call.png"
import mail from "../carimages/mail.png"
import fb from "../carimages/fb.png"
import twitter from "../carimages/twitter.png"
import linkedin from "../carimages/linkedin.png"
import insta from "../carimages/insta.png"
function Request(){
    return(
        <div className="req">
            <div className="reqform">
                <h2>Request A call back</h2>
                <input type="text" placeholder="Name" className="in1"></input>
                <input type="number" placeholder="Phone" className="in2"></input><br></br><br></br>
                <input type="email" placeholder="Email id" className="in3"></input><br></br><br></br>
                <input type="text" placeholder="Message" className="in4"></input><br></br><br></br>
                <button>SEND</button>
            </div>
            <div className="reqcon">
                <div className="reqcon1">
                    <img src={loc}></img>
                    <p>Loram Ipusum arilo elisant na</p>
                </div>
                <div className="reqcon1">
                    <img src={ph}></img>
                    <p>(+12 1234456789)</p>
                </div>
                <div className="reqcon1">
                    <img src={mail}></img>
                    <p>mail@domain.com</p>
                </div>
            </div>
            <div className="socmedia">
                <img src={fb}></img>
                <img src={twitter}></img>
                <img src={linkedin}></img>
                <img src={insta}></img>
            </div>
        </div>
    )
}

export default Request