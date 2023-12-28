import React from "react";
import UserList from './UserList';

function Home(){
    return(
        <div>
            <div className='App p-4 mt-5 mb-5 border border-4'>
            <h2>This is a Single Page Application.</h2>
            <p><b>Disclamer:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <UserList/>
        </div>
    )
}

export default Home;