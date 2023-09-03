import Header from "./header"
import Icon from "./icon"
import Abstract from "./abst"
import Video from "./video"
import "./comp1.css"
function Comp1(){
    return(
        <>
          <div className="bgimg">
            <div className="maindiv">
              <Header />
              <Icon />
              <Abstract />
              <Video />
            </div>
          </div>
        </>
    )
}
export default Comp1