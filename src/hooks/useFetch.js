import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    let abort = false;
    fetch(url)
      .then((r) => r.json())
      .then((d) => { if (!abort) setData(d); })
      .catch(console.error);
    return () => { abort = true; };
  }, [url]);

  return [data];
}
