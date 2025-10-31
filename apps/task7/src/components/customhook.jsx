import { useState, useEffect } from "react";
import axios from "axios";

export const usFetch = (url) => {
  const [data, setData] = useState([]); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err);
        console.log("Error fetching API:", err);
      }
    };

    fetchData();
  }, [url]);

  return { data, error };
};

