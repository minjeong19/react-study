import React, { useEffect, useState } from "react";
import { useFetch } from "../hook/useFetch";

const baseUrl = `https://jsonplaceholder.typicode.com`;

export default function UseFetch() {
  //   const [data, setData] = useState(null);

  //   const fetchUrl = (type) => {
  //     fetch(baseUrl + "/" + type)
  //       .then((res) => res.json())
  //       .then((res) => setData(res));
  //     //   .then((res) => console.log(res))
  //   };

  //   useEffect(() => {
  //     fetchUrl("users");
  //   }, []);

  //react hook 불러옴

  const { data, fetchUrl } = useFetch(baseUrl, "users");
  const { data: postData } = useFetch(baseUrl, "posts");

  return (
    <div>
      {/* <button onClick={() => fetchUrl("users")}>Users</button> */}
      {/* <button onClick={() => fetchUrl("todos")}>Todos</button> */}
      {/* <button onClick={() => fetchUrl("posts")}>Posts</button> */}
      <h1>1개의 post</h1>
      {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
      <h1>Users의 정보</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
