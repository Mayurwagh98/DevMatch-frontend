const errorHandler = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const { status, data } = error.response;

    let errorMessage = "Request failed";
    if (data && data.message) {
      errorMessage = data.message;
    } else if (status === 401) {
      errorMessage = "Unauthorized - Please login again";
    } else if (status === 403) {
      errorMessage = "Forbidden - You don't have permission";
    } else if (status === 404) {
      errorMessage = "Resource not found";
    } else if (status >= 500) {
      errorMessage = "Server error - Please try again later";
    }

    // alert(data);
    throw new Error(`${errorMessage} (Status: ${status})`);
  } else if (error.request) {
    // The request was made but no response was received
    throw new Error("Network error - No response from server");
  } else {
    // Something happened in setting up the request that triggered an Error
    throw new Error(`Request setup error: ${error.message}`);
  }
};

export default errorHandler;
