const initialState = {
  loading: false,
  section: "Business",
  newsData: [],
  count: 0,
  error: "",
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_FETCH_INITIATED":
      return {
        ...state,
        loading: true,
      };
    case "DATA_FETCH_SUCCESS":

      const { section, newsData } = action.payload;

      return {
        ...state,
        loading: false,
        section,
        newsData: [...newsData.articles],
        count: newsData.totalResults,
        error: ""
      };
    case "DATA_FETCH_FAILED":
      return {
        ...state,
        loading: false,
        section: "",
        newsData: [],
        count: 0,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default newsReducer;
