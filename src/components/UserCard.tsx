import { useState, type JSX } from "react";

type UserData = {
  name: string;
  email: string;
};

const UserCard = (props: UserData): JSX.Element => {
  const [status, setStatus] = useState<boolean>(true);
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "16px",
        margin: "10px",
        width: "220px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        backgroundColor: "#fdfdfd",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <span style={{ fontWeight: "bold", fontSize: "16px", color: "#333" }}>
        {props.name}
      </span>
      <span style={{ color: "#555", fontSize: "14px" }}>{props.email}</span>
      <span
        style={{
          color: status ? "green" : "red",
          fontWeight: "bold",
        }}
      >
        {status ? "🟢 Online" : "🔴 Offline"}
      </span>
      <button
        onClick={() => setStatus(!status)}
        style={{
          padding: "6px 12px",
          borderRadius: "6px",
          border: "none",
          backgroundColor: status ? "#ff4d4f" : "#4caf50",
          color: "#fff",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Change Status
      </button>
    </div>
  );
};

export default UserCard;
