import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// action
import { getUsers } from "../../store/users-service/action";
// selectors
import {
  AllUserSelector,
  PageUserSelector,
} from "../../store/users-service/selectors";
// components
import TableUsers from "../../components/TableUsers";

const Users = () => {
  // selectors
  const allUsers = useSelector(AllUserSelector);
  const page = useSelector(PageUserSelector);

  // hooks
  const dispatch = useDispatch();

  const [gender, setGender] = useState("male");

  useEffect(() => {
    dispatch(getUsers(page, gender));
  }, [page, gender]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "40px",
        width: "100%",
        marginBottom: "10px",
        paddingTop: "20px",
        paddingBottom: "20px",
        fontSize: "20px",
        fontWeight: "bold",
        textDecoration: "none",
        color: "#666d74",
      }}
    >
      <TableUsers users={allUsers} gender={gender} setGender={setGender} />
    </Box>
  );
};

export default Users;
