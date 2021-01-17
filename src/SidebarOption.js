import React from "react";
import "./SidebarOption.css";
function SidebarOption({ title, Icon, setCurrentBodyPlaylist, id }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h4>{title}</h4>
      ) : (
        <p onClick={() => setCurrentBodyPlaylist(id)}>{title}</p>
      )}
    </div>
  );
}

export default SidebarOption;
