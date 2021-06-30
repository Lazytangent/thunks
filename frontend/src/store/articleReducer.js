import articles from '../data/data.json';

const GET_ARTICLES = 'article/getArticles';
const ADD_ARTICLE = 'article/addArticle';

export const getArticles = () => {
  return { type: GET_ARTICLES, articles };
};

export const addArticle = (newArticle) => {
  return {
    type: ADD_ARTICLE,
    newArticle,
  };
};

// Create thunk creators

const initialState = { articles: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return { ...state, articles: [...action.articles] };
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.newArticle] };
    default:
      return state;
  }
};

export default articleReducer;
