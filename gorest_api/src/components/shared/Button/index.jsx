import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Button as MuiButton } from "@mui/material";
import { MuiButtonStyles } from "./muiStyles";
import cx from "classnames";

const useStyle = makeStyles(MuiButtonStyles);

export const Button = ({
  title,
  clickHandler,
  parentClassName,
  disabled,
  dark,
  type,
}) => {
  const classes = useStyle();

  return (
    <MuiButton
      className={cx(
        classes.root,
        {
          [classes.dark]: dark,
          parentClassName,
        },
        parentClassName && parentClassName
      )}
      onClick={clickHandler}
      disabled={disabled}
      variant="contained"
      type={type}
    >
      {title}
    </MuiButton>
  );
};
