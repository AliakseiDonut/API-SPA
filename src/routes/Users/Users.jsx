import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
  },[users])
  
  return (
    <div className="users">
      {users.map(el=><NavLink>{el.name}</NavLink>)}
    </div>
  );
}

export default Users;
