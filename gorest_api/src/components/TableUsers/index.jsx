import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  FormControl,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
// action
import { changePage } from "../../store/users-service/action";
// selectors
import {
  PageUserSelector,
  PaginationUserSelector,
} from "../../store/users-service/selectors";

const TableUsers = ({ users, gender, setGender }) => {
  // selectors
  const pages = useSelector(PageUserSelector);
  const { totalCount, perPage } = useSelector(PaginationUserSelector);

  // hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // helpers
  const changePageClickHandler = (page) => {
    dispatch(changePage(page));
  };
  const handleChange = (e) => {
    setGender(e.target.value);
  };

  const headerTable = [
    {
      id: "name",
      label: "Name ",
    },
    {
      id: "email",
      label: "Email",
    },
    {
      id: "gender",
      label: "Gender",
    },
    {
      id: "active",
      label: "Active",
    },
  ];

  return (
    <Box
      sx={{
        margin: "0 auto",
        fontStyle: "bold",
        width: "85%",
        height: "100%",
        marginBottom: "30px",
        textAlign: "center",
        border: "none",
      }}
    >
      <Typography
        sx={{ marginBottom: "30px", marginTop: "20px", fontSize: "24px" }}
      >
        Users
      </Typography>

      <FormControl sx={{ width: "350px", marginBottom: "20px" }}>
        <Select
          sx={{ height: "40px" }}
          value={gender}
          onChange={(e) => handleChange(e)}
        >
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
        </Select>
      </FormControl>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer sx={{ height: 375 }}>
          <Table sx={{ minWidth: 750 }}>
            <TableHead>
              <TableRow>
                {headerTable.map((item, index) => (
                  <TableCell
                    key={index}
                    sx={{
                      textAlign: item.id === "email" && "left",
                      background: "rgb(33, 131, 135)",
                    }}
                  >
                    {item.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody sx={{ color: "#666d74", overflow: "auto", height: 375 }}>
              {(users || []).map((user, index) => {
                return (
                  <TableRow
                    hover
                    sx={{
                      cursor: "pointer",
                    }}
                    onClick={() => navigate(`/edit/${user.id}`)}
                    role="checkbox"
                    tabIndex={-1}
                    key={index}
                  >
                    <TableCell>{user.name}</TableCell>
                    <TableCell align="left">{user.email}</TableCell>
                    <TableCell align="left">{user.gender}</TableCell>
                    <TableCell align="left">{user.status}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPage={perPage}
          component="div"
          count={totalCount}
          page={pages - 1}
          onPageChange={(e, page) => changePageClickHandler(page)}
          rowsPerPageOptions={[-1]}
        />
      </Paper>
    </Box>
  );
};

export default TableUsers;
