import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function User() {
    const {id} = useParams();
    
    const [user, setUser] = useState({});

    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(json => setUser(json))
    },[])

    return (
        <div className="user">
            <ul>
                <li>Username: {user.username}</li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
}

export default User;