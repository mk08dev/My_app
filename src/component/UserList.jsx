import React, { useEffect, useState } from "react";

function UserList(){
    const [userData, setUserData] = useState([]);

    const fetchUserData = async(e) => {
        const resp = await fetch("https://reqres.in/api/users");

        const json = await resp.json();
        setUserData(json.data);
    }

    useEffect( () => {
        fetchUserData(); 
        document.title = "MyCreation" 
    })

    return(
        <div className="mb-5">
            <h2>User List:</h2>
            <ul>
                { userData.map ((data) => <li className="pt-4" key={data.id}><b>User Id:</b> {data.id}, <br /><b>Name:</b> {data.first_name} {data.last_name}, <br /><img className="mt-2 mb-2" src={data.avatar} alt="img"></img>  <br /><b>Email:</b> {data.email}. </li> )}
            </ul>
        </div>   
    )
}

export default UserList;