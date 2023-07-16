import { useEffect, useState } from "react";

// 재사용 및 재설정을 위해 인자를 매개변수로 받자
export function useFetch(baseUrl, initialType) {
  const [data, setData] = useState(null);

  const fetchUrl = (type) => {
    fetch(baseUrl + "/" + type)
      .then((res) => res.json())
      .then((res) => setData(res));
    //   .then((res) => console.log(res))
  };

  useEffect(() => {
    fetchUrl(initialType);
  }, []);

  return { data, fetchUrl };
}
