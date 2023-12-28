import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Row,Col } from "react-bootstrap";

function Login(){
    //css
    const forForm = {
        width: "100%",
        display: "flex",
        flexDirection: "column"
        
    }
    // state
    const [inputData, setInputData] = useState({
        username: "", 
        password: ""
    });
    //method
    const handleChange =(e) => {
        setInputData({...inputData,[e.target.name]:e.target.value})
    }
    //submit method
    const handleSubmit = () => {
        /* e.preventDefault();
        console.log(formData); */
    };
    return(
        <div className="mt-5 mb-5">
            <Row>
            <Col md={{ span: 6, offset: 3 }}>
            <div className="p-5 border border-4 mb-5">
            <h3>Login</h3>
            <form style={forForm} className="mt-4 mb-3" method="POST" action="">
                <label htmlFor="">User Name</label>
                <input className="p-1 mb-3" type="text" name="username" placeholder="User Name" value={inputData.username}  onChange={handleChange}></input>
                <label htmlFor="">Password</label>
                <input className="p-1 mb-4" type="password" name="password" placeholder="Password" value={inputData.password}  onChange={handleChange}></input>
                <button type="submit" className="p-1 mb-2" onClick={handleSubmit}>Submit</button>
            </form>
            {/* <p>{JSON.stringify(inputData)}</p> */}
            <p><span>New User! Please</span> <Link to="/signin">Register.</Link></p>
            
            </div>
            </Col>
            </Row>
            <Row><Col style={{marginBottom:"50px"}}></Col></Row>
        </div>
    )
}

export default Login;