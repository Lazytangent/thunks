import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';
const ADD_ARTICLE = 'article/addArticle';

export const addArticle = (newArticle) => ({
  type: ADD_ARTICLE,
  newArticle,
});

export const loadArticles = () => {
  return { type: LOAD_ARTICLES, articles };
};

// 4. Create thunk creator for GET request

// 7. Create thunk creator for POST request

const initialState = { entries: [], isLoading: true, likes: 0 };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    case ADD_ARTICLE:
      return { ...state, entries: [...state.entries, action.newArticle] };
    default:
      return state;
  }
};

export default articleReducer;
