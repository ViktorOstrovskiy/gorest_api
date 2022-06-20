export const getErrorData = (error) => {
  const errorCode = error?.response?.status || error?.status || null;

  if (error?.response?.data?.errors instanceof Object) {
    const errorsObject = error.response.data.errors;
    const errorsMessages = Object.keys(errorsObject)
      .reduce(
        (errors, currentErrorObjectKey) =>
          errors.concat(errorsObject[currentErrorObjectKey]),
        []
      )
      .join(", ");
    const errorData = {
      message: errorsMessages,
      code: errorCode,
    };
    return errorData;
  }

  const errorMessage =
    error?.response?.data?.detail ||
    error?.response?.data?.message ||
    error?.response?.data?.title ||
    error?.error ||
    error?.message ||
    error;
  const errorData = {
    message: errorMessage,
    code: errorCode,
  };
  return errorData;
};
