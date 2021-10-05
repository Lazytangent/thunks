import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';
const ADD_ARTICLE = 'article/addArticle';

export const addArticle = (article) => ({
  type: ADD_ARTICLE,
  article,
});

export const loadArticles = () => {
  return { type: LOAD_ARTICLES, articles };
};

// 4. Create thunk creator for GET request

// 7. Create thunk creator for POST request

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    case ADD_ARTICLE:
      return { ...state, entries: [...state.entries, action.article] };
    default:
      return state;
  }
};

export default articleReducer;
