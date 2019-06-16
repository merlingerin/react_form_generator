import React from "react";

export const FormHint: React.FC<{ text: string }> = ({ text }) => {
  return <div className="yellow">{text}</div>;
};
