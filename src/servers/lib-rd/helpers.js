export const createResponse = (success, status_code, message, data) => {
  return {
    success,
    status_code,
    message,
    data,
  };
};
