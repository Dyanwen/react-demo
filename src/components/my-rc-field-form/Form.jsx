import useForm from "./useForm";
import React from "react";
import FieldContext from "./FieldContext";
export default function Form({ children }) {
  const [formINstance] = useForm();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <FieldContext.Provider value={formINstance}>
        {children}
      </FieldContext.Provider>
    </form>
  );
}
