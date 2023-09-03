import "../carcss/header.css"
import b2 from "../carimages/b2.png"
function Header(){
    return(
      <div>
        <div className="head">
           <div>
              <div className="headimg">
               <div className="rent4u">
                  <h1>Rent4u</h1>
                  <p>Login</p>
               </div>
               <div className="headimage">
                  <img src={b2}></img>
               </div>
                 <div className="searchead">
                 <div className="search">
            <div>
               <label>Pick Up Location</label><br></br>
               <input type="text" placeholder="acb"></input><br></br>
               <label>Drop Location</label><br></br>
               <input type="text" placeholder="acb"></input>
            </div>
            <div>
               <label>Pick Up Date</label><br></br>
               <input type="text" placeholder="01/01/2045"></input><br></br>
               <label>Return Date</label><br></br>
               <input type="text" placeholder="01/01/2045"></input>
            </div>
            <div className="search3">
               <button className="searchbut">Search</button>
            </div>
       </div>
                 </div>
              </div>
            </div>
           <div className="imgryt">
              <h1>RENT CAR EXPERTS SERVICE</h1>
              <button className="headbut">CONTACT US</button>
           </div>
        </div>
        
      </div>
    )
}

export default Header