import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const Articles = () => {
  const [articleData, setArticleData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [markdownContent, setMarkdownContent] = useState("");
  
  useEffect(() => {
    if (selectedArticle) {
      window.history.replaceState(null, "", `#${selectedArticle.id}`);
    }
  }, [selectedArticle]);

  useEffect(() => {
    fetch("/articles.json")
      .then((res) => res.json())
      .then((data) => {
        setArticleData(data);
        if (data.length > 0) {
          setSelectedCategory(data[0].category);
          setSelectedArticle(data[0].articles[0]);
        }
      });
  }, []);

  useEffect(() => {
    if (selectedArticle?.file) {
      fetch(selectedArticle.file)
        .then((res) => res.text())
        .then((text) => setMarkdownContent(text))
        .catch(() => setMarkdownContent("Markdown file could not be loaded."));
    } else {
      setMarkdownContent("");
    }
  }, [selectedArticle]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    const foundCategory = articleData.find((sec) => sec.category === category);
    if (foundCategory) {
      setSelectedArticle(foundCategory.articles[0]);
    }
  };

  // Strip markdown to plain text for copying (basic)
  const stripMarkdown = (markdown) => {
    if (!markdown) return "";
    return markdown.replace(/[#_*>\-\[\]\(\)`]/g, "").trim();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(stripMarkdown(markdownContent));
    toast.success("✅ Article copied to clipboard!");
  };

  const handleShare = () => {
    const url = `${window.location.origin}/articles#${selectedArticle?.id || ""}`;
    navigator.clipboard.writeText(url);
    toast.success("🔗 Link copied to clipboard!");
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* React Helmet for dynamic meta tags */}
      <Helmet>
        <title>{selectedArticle ? selectedArticle.title : "Articles"}</title>
        <meta
          name="description"
          content={
            markdownContent
              ? markdownContent
                .substring(0, 150)
                .replace(/[#_*>\-\[\]\(\)`]/g, "")
                .trim()
              : "Read awesome articles about React and more."
          }
        />
        <meta name="keywords" content="React, JavaScript, Web Development, Articles" />
      </Helmet>

      {/* Mobile dropdown */}
      <div className="md:hidden sticky top-16 z-40 bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 px-4 py-4">
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          📚 Select a category
        </label>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        >
          {articleData.map((section) => (
            <option key={section.category} value={section.category}>
              {section.category}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="hidden md:block md:w-64 md:h-[calc(100vh-64px)] md:fixed md:top-16 md:left-0 overflow-y-auto bg-gray-100 dark:bg-gray-800 border-r border-gray-300 dark:border-gray-700 p-4 z-30">
          {articleData.map((section) => {
            const isSelectedCategory = selectedCategory === section.category;
            return (
              <div key={section.category} className="mb-4">
                <button
                  onClick={() => {
                    setSelectedCategory(section.category);
                    setSelectedArticle(section.articles[0]);
                  }}
                  className={`w-full text-left font-semibold text-base px-2 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition flex justify-between items-center ${isSelectedCategory
                      ? "bg-purple-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    }`}
                >
                  {section.category}
                  <span>{isSelectedCategory ? "▲" : "▼"}</span>
                </button>
                {isSelectedCategory && (
                  <ul className="mt-2 ml-4 space-y-1">
                    {section.articles.map((article) => (
                      <li key={article.id}>
                        <button
                          onClick={() => setSelectedArticle(article)}
                          className={`w-full text-left px-2 py-1 rounded text-sm ${selectedArticle?.id === article.id
                              ? "bg-purple-600 text-white"
                              : "text-gray-800 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900"
                            }`}
                        >
                          {article.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </aside>

        {/* Article Content */}
        <main className="flex-1 md:ml-64 p-6 max-w-4xl mx-auto prose prose-indigo dark:prose-invert">
          {selectedArticle ? (
            <>
              <h1 className="text-3xl font-bold mb-4">{selectedArticle.title}</h1>
              <ReactMarkdown>{markdownContent}</ReactMarkdown>
              <div className="mt-6 flex gap-4">
                <button
                  onClick={handleCopy}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Copy
                </button>
                <button
                  onClick={handleShare}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  Share
                </button>
              </div>
            </>
          ) : (
            <p className="text-lg">📄 Please select an article to read.</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default Articles;
