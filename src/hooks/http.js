import { useState, useEffect } from "react";

export const useHttp = (url, dependencies) => {
  const [isLoading, setLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  //   fetch("https://swapi.dev/api/people");
  useEffect(() => {
    setLoading(true);
    console.log("Sending Http request to" + url);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch.");
        }
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setFetchedData(data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, dependencies);

  return [isLoading, fetchedData];
};
