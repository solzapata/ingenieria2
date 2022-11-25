import React, { useContext } from "react";

import UserContext from "../context/UserContext";
import UserMenu from "../components/UserMenu";

function Menu() {
  const { user, setUser } = useContext(UserContext);

  return (
    <UserMenu
      onClick={() => {
        setUser((prevUser) => (prevUser === "final" ? "admin" : "final"));
      }}
    >
      {user}
    </UserMenu>
  );
}

export default Menu;
