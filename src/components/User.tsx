import { type JSX } from "react";
import UserCard from "./UserCard";

const User = (): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#e0f7fa",
        minHeight: "100vh",
      }}
    >
      <UserCard name="Rahul" email="v@gmail.com" />
      <UserCard name="Vijay" email="j@gmail.com" />
      <UserCard name="Sahil" email="s@gmail.com" />
    </div>
  );
};
export default User;
