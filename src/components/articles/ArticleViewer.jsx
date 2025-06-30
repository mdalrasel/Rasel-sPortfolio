const ArticleViewer = ({ article }) => {
  if (!article) return <p>Select an article to read.</p>;

  return (
    <div className="prose max-w-full">
      <h1>{article.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {article.date} — {article.author}
      </p>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
};

export default ArticleViewer;
