import "../carcss/blog.css"
function Blog(prop2){
    return(
        <div className="latblog">
            <div className="blogdate">
                <p>{prop2.date}</p>
            </div>
            <div className="blogimg">
                <img src={prop2.img1}></img>
            </div>
            <div className="blogcont">
                <h3>{prop2.hd1}</h3>
                <p>{prop2.cont}</p>
            </div>
        </div>
    )
}

export default Blog