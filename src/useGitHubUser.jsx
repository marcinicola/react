import { useEffect } from "react";
import { useState } from "react";

export const useGitHubUser = (username) => {
  const API_URL = `https://api.github.com/users/${username}`;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading,setLoading]= useState(false)

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Errore nella richiesta");
      }
      const dataResponse = await response.json();
      setData(dataResponse);
    } catch (error) {
      setError(error);
    }finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { data, error, loading };
};
