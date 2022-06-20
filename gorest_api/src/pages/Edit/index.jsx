import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// components
import EditForm from "../../components/EditForm";
// selectors
import {
  ErrorUserSelector,
  OneUserSelector,
  SuccessUserSelector,
} from "../../store/users-service/selectors";
// action
import {
  editUsers,
  getUser,
  resetError,
  resetSuccess,
} from "../../store/users-service/action";
import { Box, Typography } from "@mui/material";
// shared
import { Snackbar } from "../../components/shared/SnackBar";

const Edit = () => {
  // selectors
  const user = useSelector(OneUserSelector);
  const error = useSelector(ErrorUserSelector);
  const success = useSelector(SuccessUserSelector);

  // hooks
  const { id } = useParams();

  const [isLoaded, setIsLoaded] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    loadUser(id);
  }, [id]);

  const loadUser = async (id) => {
    setIsLoaded(false);
    await dispatch(getUser(id));
    setIsLoaded(true);
  };
  //helpers
  const editClickHandler = (newValue) => {
    dispatch(editUsers(id, newValue, navigate));
  };

  const closeSnackbar = () => {
    dispatch(resetSuccess());
    dispatch(resetError());
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "700px",
      }}
    >
      {isLoaded && (
        <>
          <Typography
            sx={{
              position: "absolute",
              top: "2%",
              left: "5%",
              "&:hover": { cursor: "pointer" },
            }}
            onClick={() => navigate("/users")}
          >
            Back to users
          </Typography>

          <EditForm
            user={user}
            submitClickHandler={editClickHandler}
            success={success}
          />
        </>
      )}
      <div>
        <Snackbar
          success={success ?? undefined}
          error={!!error?.error || undefined}
          message={
            error?.error?.message || (success && "User update") || undefined
          }
          onClose={closeSnackbar}
        />
      </div>
    </Box>
  );
};

export default Edit;
