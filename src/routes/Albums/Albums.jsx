import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Albums() {
  const [albums, setAlbums] = useState([]);
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(json => setAlbums(json))
  },[albums])
  
  return (
    <div className="users">
      {albums.map(el=><NavLink>{el.title}</NavLink>)}
    </div>
  );
}

export default Albums;
  