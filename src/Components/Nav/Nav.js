import React, { useContext } from "react";
import "./Nav.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { userContext } from "../../Context/userContext";

const Nav = () => {
  const { selectedPage, setSelectedPage } = useContext(userContext);
  return (
    <div className="nav">
      {selectedPage === "home" ? null : (
        <div
          onClick={() => {
            setSelectedPage("home");
          }}
          className="nav-icon--container"
        >
          <ArrowBackIcon fontSize="sm" />
        </div>
      )}
      {selectedPage === "home" ? "Field Service" : selectedPage}
    </div>
  );
};

export default Nav;
