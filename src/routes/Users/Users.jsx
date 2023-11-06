import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUsers(json))
  },[])
  
  // const navigate = useNavigate();
  // const goToUser = (id) => {
  //   navigate(`/users/${id}`);
  // }

  return (
    <div className="users">
      {users.map(el=><NavLink to={`/users/${el.id}`}>{el.name}</NavLink>)}
    </div>
  );
}

export default Users;
