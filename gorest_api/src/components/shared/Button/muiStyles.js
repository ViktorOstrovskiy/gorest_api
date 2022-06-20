export const MuiButtonStyles = {
  root: {
    "&.MuiButton-root": {
      height: "20px",
      padding: "15px",
      backgroundColor: "#blue",
      "&.MuiButton-outlined": {
        backgroundColor: "transparent",
      },

      "& .MuiTouchRipple-root": {
        display: "none",
      },
    },
    "&.MuiButton-root:hover": {
      backgroundColor: "#808080",
    },
  },
};
