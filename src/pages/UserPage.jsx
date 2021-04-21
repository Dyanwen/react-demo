import React, { useContext } from "react";
import { ThemeContext } from "../Context";

export default function UserPage() {
  const context = useContext(ThemeContext);
  console.log(context);
  return (
    <div>
      <span className={context.ThemeColor}>{context.ThemeColor}</span>
    </div>
  );
}
