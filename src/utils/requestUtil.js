const responseCheck = (response) => {
  const status = response.status;
  if (status === 200 || status === 304) {
    return response;
  } else if (status === 500) {
    if (response.data.errorType === 'common') {
      throw new Error(response.data.errorMessage || response.statusText); // eslint-disable-line
    }
  }
};
export default responseCheck;
