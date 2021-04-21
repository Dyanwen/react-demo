import React, { useContext } from "react";
import { ThemeContext, UserContext } from "../Context";

export default function UseContextPage(props) {
  const { themeColor } = useContext(ThemeContext);
  const { name } = useContext(UserContext);

  return (
    <div>
      <span>{themeColor}</span>
      <span>{name}</span>
    </div>
  );
}
