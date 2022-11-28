import React, { useState, useEffect } from "react";
import "./css/CButton.css";
import Button from "@mui/material/Button";

const CButton = (props) => {
  const [children, setText] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [icon, setIcon] = useState("");
  const [rightIcon, setRightIcon] = useState("");
  const [leftIcon, setLeftIcon] = useState("");
  const [type] = useState(props.type || "primary");

  useEffect(() => {
    if (props.children !== undefined) {
      setText(props.children);
    }    
  }, [props.children]);

  const onClick = (event) => {
    if (props.onClick !== undefined) {
      props.onClick(event);
    }
  };

  return (
    <>
      <Button
        className={`btn btn-${type} ${disabled ? "disabled" : ""} ${
          props.className
        }`}
        disabled={disabled}
        onClick={onClick}
      >       
        {children}
      </Button>
    </>
  );
};

export default CButton;
