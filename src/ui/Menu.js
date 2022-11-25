import React, { useContext, useEffect } from "react";

import UserContext from "../context/UserContext";
import UserMenu from "../components/UserMenu";

function Menu() {
  const { user, setUser, setShowModal } = useContext(UserContext);

  useEffect(() => {
    if (user === "final") {
      setShowModal(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <UserMenu
      onClick={() => {
        setUser((prevUser) => (prevUser === "final" ? "admin" : "final"));
      }}
      data={user}
    />
  );
}

export default Menu;
