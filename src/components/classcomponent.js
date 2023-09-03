import axios from "axios";
import { Component } from "react";

class ClassEx extends Component{
    constructor(){
        super();
        this.state={
            data:"State Variable",
            data1:"State",
            data2:[]
        }
    }
    changehandler(){
        this.setState({
            data:"Setter Function",
            data1:"Variable"
        })
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            this.setState({
                data2:res.data
            });
        })
        .catch(()=>{
            this.setState({
                data2:[]
            })
        })
        }
    render(){
        return (
            <>
            <h1>Class Component</h1>
            <h3>{this.props.title}</h3>
            <h3>{this.state.data}</h3>
            <p>{this.state.data1}</p>
            <button onClick={()=>this.changehandler()}>CLick</button>
            {
                this.state.data2.map((ele)=>{
                    return<h3>{ele.id}.{ele.username}</h3>
                })
            }
            </>
        )
    }
}
export default ClassEx