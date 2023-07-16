import React from "react";

export default function UseState() {
  const items = [
    {
      item: "노트북",
      price: "23원",
    },
    {
      item: "핸드폰",
      price: "21원",
    },
  ];

  return (
    <div>
      {items.map((i) => (
        <div>
          <h1>{i.item}</h1>
          <h2>{i.price}</h2>
        </div>
      ))}
    </div>
  );
}
