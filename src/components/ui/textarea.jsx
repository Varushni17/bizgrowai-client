// src/components/ui/textarea.jsx

import React from "react";

export const Textarea = ({ value, onChange, placeholder }) => {
  return (
    <textarea
      className="w-full p-2 border rounded-md"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={5}
    />
  );
};
