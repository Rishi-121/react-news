export const handlerClicked = (section, page) => {
  return {
    type: "HANDLER_CLICKED",
    payload: { section, page },
  };
};

export const dataFetchInitiated = () => {
  return {
    type: "DATA_FETCH_INITIATED",
  };
};

export const dataFetchSuccess = (section, newsData) => {
  return {
    type: "DATA_FETCH_SUCCESS",
    payload: { section, newsData },
  };
};

export const dataFetchFailure = (error) => {
  return {
    type: "DATA_FETCH_FAILED",
    payload: error,
  };
};
