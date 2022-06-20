import { useSelector } from "react-redux";
import {
  Container,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";
// shared
import { Button } from "../shared/Button";
// selectors
import { OneUserSelector } from "../../store/users-service/selectors";

const EditForm = ({ submitClickHandler }) => {
  // selectors
  const user = useSelector(OneUserSelector);
  // hooks
  const [userInfo, setUserInfo] = useState({
    name: user?.name,
    email: user?.email,
    gender: user?.gender,
    status: user?.status,
  });
  return (
    <Box
      sx={{
        width: "50%",
        display: "grid",
        justifyContent: "center",
        aligItems: "center",
        boxShadow: "4px 4px 14px rgb(0, 0, 0)",
        borderRadius: 10,
      }}
    >
      {user ? (
        <main>
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 0,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Edit user
              </Typography>
            </Container>
          </Box>
          <Container
            maxWidth="lg"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              py: 2,
            }}
          >
            <TextField
              sx={{ my: 2, width: "300px" }}
              variant="outlined"
              value={userInfo.name}
              onChange={(e) =>
                setUserInfo({ ...userInfo, name: e.target.value })
              }
            />
            <TextField
              sx={{ my: 2, width: "300px" }}
              variant="outlined"
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
            />
            <FormControl sx={{ my: 2, width: "300px" }}>
              <Select
                value={userInfo.gender}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, gender: e.target.value })
                }
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ my: 2, width: "300px" }}>
              <Select
                value={userInfo.status}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, status: e.target.value })
                }
              >
                <MenuItem value={"active"}>Active</MenuItem>
                <MenuItem value={"inactive"}>Inactive</MenuItem>
              </Select>
            </FormControl>

            <Button
              title="Edit"
              type="submit"
              clickHandler={() => submitClickHandler(userInfo)}
              disabled={
                user.name === userInfo.name &&
                user.email === userInfo.email &&
                user.gender === userInfo.gender &&
                user.status === userInfo.status &&
                true
              }
            />
          </Container>
        </main>
      ) : null}
    </Box>
  );
};

export default EditForm;
