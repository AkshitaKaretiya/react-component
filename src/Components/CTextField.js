import React, { useState, useEffect } from "react";
import "./css/CTextField.css";
import { TextField } from "@mui/material";

const CTextField = (props) => {
  const [change, setChange] = React.useState({ value: "", textLength: 0 });
  const [valid, setValid] = useState(false);
  const { value, textLength } = change;

  return (
    <>
      <TextField
        id={props.id}
        variant="outlined"
        defaultValue={props.defaultValue}
        placeholder={props.placeholder || ""}
        multiline={props.multiline || false}
        className={`form-control ${valid ? "valid" : ""}` + props.className}
        disabled={props.disabled || false}
        value={value}
        helperText={props.helperText || ""}
        autoFocus={props.autoFocus || false}
        fullWidth={props.fullWidth || true}
        label=""
      />
    </>
  );
};

export default CTextField;
