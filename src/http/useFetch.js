import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [err, setError] = useState(false);

  useEffect(() => { 
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("err");
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setData(data);
        setIsPending(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("aborrte");
        } else {
          setError(err.message);
        }
      });

    return () => abortCont.abort();
  }, [url]);

  return {
    data,
    isPending,
    err,
  };
};

export default useFetch;
