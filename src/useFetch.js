import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  //set state for message for fetch error
  const [error, setError] = useState(null);

  useEffect(() => {
    //to abort the fetch request when we change route
    const abortCount = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCount.signal })
        .then((res) => {
          //checking fetch status
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          //console.log(data);
          setData(data);
          //condition load stops once data loads
          setIsPending(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    // return for abort
    return () => abortCount.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
