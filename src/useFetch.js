import { useEffect, useState } from "react";

export const useFetch = (link) => {
    const [data, setData] = useState([]);
  
    useEffect(()=>{
      fetch(link)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.log(error))
    },[link])

    return data;
}