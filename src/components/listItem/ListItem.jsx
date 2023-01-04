import React from "react";



const ListItem = ({ title="", icon="", text="" }) => {
   
  return (

   
   
    <div className="custom-grid">
      <div className="grid-icon ">
        {icon}
      </div>
      <div className="item-content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ListItem;
