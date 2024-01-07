import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Row,Col } from "react-bootstrap";

function SignIn(){
    //css
    const forForm = {
        width: "100%",
        display: "flex",
        flexDirection: "column"
        
    }
    // state
    const [inputData, setInputData] = useState({
        username: "",
        email: "", 
        mobile: "",
        password: ""
    });
    //method
    const handleChange =(e) => {
        setInputData({...inputData,[e.target.name]:e.target.value})
    }
    const handleSubmit = () => {
        /* e.preventDefault();
        console.log(formData); */
    };
    return(
        <div className="mt-5 mb-5">
            <Row>
            <Col md={{ span: 4, offset: 4 }}>
            <div className="p-5 border border-4">
            <h3>Register Now</h3>
            <form style={forForm} className="mt-4 mb-3" method="POST" action="">
                <label htmlFor="">User Name</label>
                <input className="p-1 mb-3" type="text" name="username" placeholder="User Name" value={inputData.username}  onChange={handleChange}></input>
                <label htmlFor="">Mobile No.</label>
                <input className="p-1 mb-3" type="number" name="mobile" placeholder="Mobile No." value={inputData.mobile}  onChange={handleChange}></input>
                <label htmlFor="">Email Id</label>
                <input className="p-1 mb-3" type="text" name="email" placeholder="Email Id" value={inputData.email}  onChange={handleChange}></input>
                <label htmlFor="">Create Password</label>
                <input className="p-1 mb-4" type="password" name="password" placeholder="Create Password" value={inputData.password}  onChange={handleChange}></input>
                <button type="submit" className="p-1 mb-2" onClick={handleSubmit}>Submit</button>
            </form>
            {/* <p>{JSON.stringify(inputData)}</p> */}
            <p><span>Register User! Please</span> <Link to="/login">Login.</Link></p>
            </div>
            </Col>
            </Row>
        </div>
    )
}

export default SignIn;