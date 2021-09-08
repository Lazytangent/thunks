import articles from '../data/data.json';

const GET_ARTICLES = 'article/getArticles';
const ADD_ARTICLE = 'article/addArticle';

export const addArticle = (newArticle) => ({
  type: ADD_ARTICLE,
  newArticle,
});

export const getArticles = () => {
  return { type: GET_ARTICLES, articles };
};

// 4. Create thunk creator for GET request

// 7. Create thunk creator for POST request

const initialState = { entries: [], isLoading: true };
// const initialState = { entries: {}, isLoading: true };

const articleReducer = (state = initialState, action) => {
  // let newState = { ...state };
  switch (action.type) {
    case GET_ARTICLES:
    //   action.articles.forEach((article) => {
    //     newState.entries[article.id] = article;
    //   });
    //   return newState;

      return { ...state, entries: [...action.articles] };
    case ADD_ARTICLE:
      // return {
      //   ...state,
      //   entries: {
      //     ...state.entries,
      //     [action.newArticle.id]: action.newArticle,
      //   },
      // };

      // newState.entries[action.newArticle.id] = action.newArticle;
      // return newState;

      return { ...state, entries: [...state.entries, action.newArticle] };
    default:
      return state;
  }
};

export default articleReducer;
