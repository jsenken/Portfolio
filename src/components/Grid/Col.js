import React from "react";
import "./style.css"

export const Col = ({ size, children }) => (
  <div className={size.split(" ").map(size => "col-" + size).join(" ") + " panel"}>
    {children}
  </div>
);
