const ArticlesSlidebar = ({ articles, onSelect }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Articles</h2>
      <ul className="space-y-2">
        {articles.map(article => (
          <li key={article.id}>
            <button
              className="text-left w-full hover:text-purple-600"
              onClick={() => onSelect(article)}
            >
              {article.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesSlidebar;
