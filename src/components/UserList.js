import React from "react";

export const UserList = ({ list }) => {
  return (
    <div className="list"
    style={{
        background:"pink",
        borderRadius:"10px",
        fontSize: "1rem",
      }}>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};