import Header from "./carcompoenets/header"
import Favcar from "./carcompoenets/favcar"
import c3 from "./carimages/c3.png"
import Abtcar from "./carcompoenets/abtcar"
import Bestcar from "./carcompoenets/bestcar"
import Bestlist from "./carcompoenets/bestlist"
import b1 from "./carimages/b1.png"
import b2 from "./carimages/b2.png"
import b3 from "./carimages/b3.png"
import b4 from "./carimages/b4.png"
import Blog from "./carcompoenets/blog"
import blog1 from "./carimages/blog1.jpg"
import blog2 from "./carimages/blog2.jpg"
import Choose from "./carcompoenets/choose"
import Customer from "./carcompoenets/customer"
import Request from "./carcompoenets/request"
import Footer from "./carcompoenets/footer"
import Add from "./carcompoenets/add"
import "./App.css"
import State from "./components/state"
import Useff from "./components/useff"
import Todo from "./components/todo" 
import Form from "./reactTask/form_val"
import ClassEx from "./components/classcomponent"
import { hover } from "@testing-library/user-event/dist/hover"
import Home from "./components/routing/home"
import Contact from "./components/routing/contact"
import { BrowserRouter,Route,Routes,Link } from "react-router-dom"
import { Provider } from "react-redux"
import Counter from "./Redux/counter"
import store from "./Redux/store"


/*ROUTING
function App(){
  return(
    <BrowserRouter>
       <Link to="/">HOME</Link><br></br>
       <Link to="/contact/2">CONTACT</Link>
       <Routes>
        <Route path="/" element={<Useff />}></Route>
        <Route path="/contact/:id" element={<Contact />}></Route>
       </Routes>
    </BrowserRouter>
  )
}*/

/*Redux*/
function App(){
  return(
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  )
}
/*TO DO LIST
function App(){
  return(
    <div className="todoapp">
      <Todo />
    </div>
  )
}*/

/*Form Validation
function App(){
  return(
    <div>
      <Form />
    </div>
  )
}*/


/*Class example
function App(){
  return(
    <>
    <ClassEx  title="Props"/>
    </>
  )
  
}*/

/*useEffect
function App(){
  return(
    <Useff />
  )
}*/


/*Car_Template 
function App(){
  const bestlist=[
    {
      bestcar:b1,
      bestrate:"Rent $200"
    },
    {
      bestcar:b2,
      bestrate:"Rent $200"
    },
    {
      bestcar:b3,
      bestrate:"Rent $200"
    },
    {
      bestcar:b4,
      bestrate:"Rent $200"
    },
    {
      bestcar:b3,
      bestrate:"Rent $200"
    },
    {
      bestcar:b4,
      bestrate:"Rent $200"
    }
  ]
  const customer=[
    {
      para:"It is a long established fact that areader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem It is a long established that a reader will be distracted by the content of the page when looking at its layout.The point of using Lorem",
      head:"Established",
      by:"by the readable"
    },
    {
      para:"It is a long established fact that areader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem It is a long established that a reader will be distracted by the content of the page when looking at its layout.The point of using Lorem",
      head:"Established",
      by:"by the readable"
    },
    {
      para:"It is a long established fact that areader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem It is a long established that a reader will be distracted by the content of the page when looking at its layout.The point of using Lorem",
      head:"Established",
      by:"by the readable"
    }
  ]
  const carlist=[
    {
      car: b2,
      hd: "Choose your car",
      par: "It is a long established fact that a reader will be distracted by the readable content of a page when",
      butt: "Read More"
    },
    {
      car: b3,
      hd: "Choose your car",
      par: "It is a long established fact that a reader will be distracted by the readable content of a page when",
      butt: "Read More"
    },
    {
      car: c3,
      hd: "Choose your car",
      par: "It is a long established fact that a reader will be distracted by the readable content of a page when",
      butt: "Read More"
    }
  ]
  const blogs=[
    {
      date:"04 Nov 2045",
      img1:blog1,
      hd1:"Steering Wheels",
      cont:"It is a long established fact that a reader will be distracted by the readable The point of using Lorem"
    },
    {
      date:"04 Nov 2045",
      img1:blog2,
      hd1:"Vintage",
      cont:"It is a long established fact that a reader will be distracted by the readable The point of using Lorem"
    },
    {
      date:"04 Nov 2045",
      img1:blog1,
      hd1:"Steering Wheels",
      cont:"It is a long established fact that a reader will be distracted by the readable The point of using Lorem"
    }
  ]
  return(
    <div>
      <Header />
      <div className="favapp">
        <div className="favhead">
        <h1>Better Way For Find Your Favourite Cars</h1>
        <p>It is a long established fact that a reader will be distracted by the readable</p>
        </div>
        <div className="favapp1">
        {
          carlist.map((list,l)=>{
            return<Favcar
              key={l}
              car={list.car}
              hd={list.hd}
              par={list.par}
              butt={list.butt}
            />
          })
        }
        </div>
      </div>
      <Abtcar />
      <Bestcar />
      <div className="bestapp">
        <div className="bestmain">
          {
            bestlist.map((car,c)=>{
              return<Bestlist
                 key={c}
                 bestcar={car.bestcar}
                 bestrate={car.bestrate}
              />
            })
          }
        </div>
        <button className="bestbut">See More</button>
      </div>
      <div className="bloghead">
      <h1>Our Latest Blog</h1>
      <p>It is a long established fact that a reader will be distracted by the</p>
      </div>
      <div className="blogapp">
        {
          blogs.map((bl,b)=>{
            return<Blog
            key={b}
            date={bl.date}
            img1={bl.img1}
            hd1={bl.hd1}
            cont={bl.cont}
            />
          })
        }
      </div>
      <Choose />
      <div className="custheading">
               <h1>What Is say Customer</h1>
               <p>It is a long established fact that a reader will be distracted by the</p>
      </div>
      <div className="custapp">
          {
            customer.map((cust,u)=>{
              return<Customer
                 key={u}
                 para={cust.para}
                 head={cust.head}
                 by={cust.by}
              />
            })
          }
      </div>
      <Request />
      <p className="gmap">Google Maps Platform rejected your request. This API project is not authorized to use this API. </p>
      <Footer />
      <Add />
    </div>
  )
}*/
export default App
/*Props_example
/*import Card from "./components/card"
import "./App.css"
import bg from '../src/images/Abstract_painting.jpg'
function App(){
  const data = [
    {
      image:"https://www.shutterstock.com/shutterstock/photos/613776053/display_1500/stock-photo-oil-painting-rainy-day-613776053.jpg",
      title:"Umbrella"
    },
    {
      image:"https://t3.ftcdn.net/jpg/02/73/22/74/360_F_273227473_N0WRQuX3uZCJJxlHKYZF44uaJAkh2xLG.jpg",
      title:"Eyes"
    },
    {
      image:"https://www.shutterstock.com/shutterstock/photos/2259644567/display_1500/stock-photo-abstract-colorful-oil-acrylic-painting-of-bird-and-spring-flower-modern-art-paintings-brush-2259644567.jpg",
      title:"Bird"
    },
    {
      image:"https://static.vecteezy.com/system/resources/previews/021/958/160/large_2x/ai-generated-synthetic-scenery-landscape-watercolor-painting-riverside-scenery-at-sunset-photo.jpg",
      title:"Nature"
    }
  ]
  //Props using map
  /*return(
    <div className="main">
    <h1>PAINTINGS</h1>
    <div className="Parent">
      {
        data.map((obj,i)=>{
          return<Card
             key={i}
             image={obj.image}
             title={obj.title}
          />
        })
      }
    </div>
    </div>
  )
  //PROPS
  return(
    <div>
      <Card image="https://www.shutterstock.com/shutterstock/photos/613776053/display_1500/stock-photo-oil-painting-rainy-day-613776053.jpg" title={1}/>
      <Card image="https://www.shutterstock.com/shutterstock/photos/613776053/display_1500/stock-photo-oil-painting-rainy-day-613776053.jpg" title="a"/>
      <Card image="https://www.shutterstock.com/shutterstock/photos/613776053/display_1500/stock-photo-oil-painting-rainy-day-613776053.jpg" title="b"/>
    </div>
  )
}*/

