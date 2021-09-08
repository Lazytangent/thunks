// import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './SingleArticle.css';

const SingleArticle = ({ articles }) => {
// const SingleArticle = () => {
  const { id } = useParams();

  const singleArticle = articles.find((article) => article.id === id);
  // const singleArticle = useSelector((state) => state.articles.entries[id])

  return (
    <div className="singleArticle">
      <h1>{singleArticle?.title}</h1>
      <img src={singleArticle?.imageUrl} alt={singleArticle?.title} />
      <p>{singleArticle?.body}</p>
    </div>
  );
};

export default SingleArticle;
