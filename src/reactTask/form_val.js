import { Component } from "react";

class Form extends Component{
        constructor(){
            super();
            this.state={
                formdata:{},
                isValidnm: 1,
                isValidem: 1,
                isValidpw: 1,
                buttonClicked:false
            };
        }
        //Validity
        validnm(name){
            return name!=="";
        }
        validem(email){
            return email.includes('@gmail.com');
        }
        validpw(pw){
            const uAlp = /[A-Z]/;
            const Num = /[0-9]/;
            const sChar = /[!@#$%^&*()]/;

            if(pw===""){
                return "Invalid Password"
            }
            else if (!uAlp.test(pw)) {
                return "Include uppercase letter";
            } 
            else if (!Num.test(pw)) {
                return "Include numerals";
            } 
            else if (!sChar.test(pw)) {
                return "Include special character";
            } 
            else {
                return "Valid";
            }
        }
    //check
    uname(name){
        const isValid = this.validnm(name);
        this.setState({
            isValidnm : isValid
        })
    }   
    mailid(email){
        const isValid = this.validem(email);
        this.setState({
            isValidem : isValid
        })
    }
    passwd(password){
        const isValid = this.validpw(password);
        this.setState({
            isValidpw : isValid
        })
    }
    display(){
        let fname = document.getElementById("nm").value;
        let emailid = document.getElementById("em").value;
        let pass1 = document.getElementById("pw").value;
        
        this.uname(fname);
        this.mailid(emailid);
        this.passwd(pass1);
        this.setState({
            buttonClicked: true
        },()=>{
            if(this.state.isValidnm && this.state.isValidem && this.state.isValidpw){
                let pass2="";
                for(let i=0; i<pass1.length; i++){
                    pass2+=".";
                }
                this.setState({
                    formdata : {
                        name:fname,
                        email:emailid,
                        password:pass2
                    }
                });
            }
        });

        document.getElementById("nm").value = "";
        document.getElementById("em").value = "";
        document.getElementById("pw").value = "";
        

    }
    render(){

        return(
            <div>
                <h2>REGISTRATION FORM</h2>
                <p>Username:</p>
                <input id="nm" type="text" placeholder="Enter name"></input><br></br>
                {this.state.buttonClicked && !this.state.isValidnm && <span style={{ color: "red" }}>Username Invalid</span>}

                <p>Email ID:</p>
                <input id="em" type="email" placeholder="Enter mail id"></input><br></br>
                {this.state.buttonClicked && !this.state.isValidem && <span style={{ color: "red" }}>MailId Invalid</span>}

                <p>Password:</p>
                <input id="pw" type="password" placeholder="Enter password" ></input><br></br>
                {this.state.buttonClicked && this.state.isValidpw !== "Valid" && <span style={{ color: "red" }}>{this.state.isValidpw}</span>}

                <button onClick={()=>this.display()}>REGISTER</button>

                {this.state.buttonClicked && (this.state.isValidnm && this.state.isValidem && this.state.isValidpw==="Valid") && (
                    <p>
                        <span style={{fontWeight : "bolder"}}>DETAILS</span><br/><br/>
                        Name: {this.state.formdata.name}
                        <br />
                        Email: {this.state.formdata.email}
                        <br />
                        Password: {this.state.formdata.password}
                    </p>

                )}
            </div>
        )
    }
    
}

export default Form