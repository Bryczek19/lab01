import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Błąd przy pobieraniu danych:", err));
  }, [url]);

  return [data];
}

export default useFetch;
