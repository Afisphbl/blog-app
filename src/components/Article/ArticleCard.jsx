import { ArrowRight, Calendar, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import "./ArticleCard.css";

function ArticleCard({ article, compact = false }) {
  const articleLink = article?.slug
    ? `/blog/${article.slug}`
    : "/blog/future-decentralized-web";

  return (
    <article className={compact ? "article-card compact" : "article-card"}>
      <Link to={articleLink}>
        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            className="article-image"
          />
        ) : (
          <div className="article-image-placeholder"></div>
        )}
      </Link>
      <div className="article-copy">
        <Link to={articleLink}>
          <h3>{article.title}</h3>
        </Link>
        <p>{article.excerpt}</p>
        <div className="meta-row">
          {article.date ? (
            <span>
              <Calendar size={14} /> {article.date}
            </span>
          ) : null}
          {article.readTime ? (
            <span>
              <Clock3 size={14} /> {article.readTime}
            </span>
          ) : null}
        </div>
        <Link to={articleLink} className="read-more-btn">
          Read More <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}

export default ArticleCard;
