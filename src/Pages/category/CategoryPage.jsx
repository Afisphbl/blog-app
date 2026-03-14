import { Grid3x3, Rocket } from "lucide-react";
import ArticleCard from "../../components/Article/ArticleCard";
import { categoryPosts } from "../../Data/blogData";
import "./CategoryPage.css";

function CategoryPage() {
  return (
    <main className="page-shell">
      <section className="category-hero">
        <div className="badge">
          <Grid3x3 size={14} /> Technology
        </div>
        <h1>Dive into the deep end of innovation.</h1>
        <p>
          From artificial intelligence to quantum systems, this category tracks
          technologies shaping our collective future. Explore curated research
          and insights.
        </p>
      </section>

      <section className="section-block">
        <div className="section-head">
          <h2>Featured Articles</h2>
          <div className="badge subtle">
            <Rocket size={14} /> Updated Weekly
          </div>
        </div>
        <div className="article-grid">
          {categoryPosts.map((post) => (
            <ArticleCard key={post.title} article={post} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default CategoryPage;
