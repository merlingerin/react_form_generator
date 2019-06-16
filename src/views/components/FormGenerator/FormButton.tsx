import React from "react";

export const FormButton: React.FC<{ id: string; title: string }> = ({
  id,
  title
}) => (
  <button key={id} type="button" className="waves-effect waves-light btn-small">
    {title}
  </button>
);
