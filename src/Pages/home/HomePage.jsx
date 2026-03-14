import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
// import ArticleCard from "../components/ArticleCard";
import { homeLatestArticles } from "../../Data/blogData";
import "./HomePage.css";

function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-section">
        <div className="badge">
          <Sparkles size={14} /> Insights for the Modern Developer
        </div>
        <h1>
          Explore the latest trends and stories from technology and design.
        </h1>
        <p>
          Curated articles for curious minds across engineering, product, and UI
          design. Stay ahead with deep dives into modern development.
        </p>
        <div className="hero-actions">
          <Link to="/blog/future-ai-ui-design" className="cta-btn">
            Start Reading <ArrowRight size={18} />
          </Link>
          <Link to="/categories" className="ghost-btn">
            View Categories
          </Link>
        </div>
      </section>

      <section className="section-block">
        <div className="section-head">
          <h2>Latest Articles</h2>
          <Link to="/categories" className="read-more-btn">
            See all articles <ArrowRight size={14} />
          </Link>
        </div>
        {/* <div className="article-grid"> */}
        {/* {homeLatestArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))} */}
        {/* </div> */}
      </section>
    </main>
  );
}

export default HomePage;
