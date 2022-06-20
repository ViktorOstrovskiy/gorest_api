import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Main = () => {
  // hooks
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        color: "#666d74",
        boxShadow: "4px 4px 14px rgb(0, 0, 0)",
        borderRadius: "30px",
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {
          cursor: "pointer",
        },
        margin: "200px auto",
      }}
      onClick={() => navigate("users")}
    >
      <Typography variant="h5" component="div">
        Users
      </Typography>
    </Box>
  );
};

export default Main;
