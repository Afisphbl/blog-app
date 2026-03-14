import {
  BadgeCheck,
  TrendingUp,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
// import ArticleCard from "../components/ArticleCard";
// import { authorPosts } from "../data/blogData";
import "./AuthorPage.css";

function AuthorPage() {
  return (
    <main className="page-shell">
      <section className="author-hero">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTgJByWrTJHpfCDZEPCcMtRCbwMaZumS7DDOesxDjsAjfY3OQjEiGt_Zhire8b7utbJEeqsd3LbO6YYHEdJWLA5LRyNkkje2MYEeDr0hPalmgdE0q1nInxQh89JlzF0zFmJvVVL0Pwd-Akodebk1-37q3SSN0FTr67KXM667LpxOe3vaSiDH8iABXI5mx_maTRrVJs4vdv5OIYnDKL6QmnwCRIEYPBydIhk2jarSaE1mbcgz1otK4af64V5Q_l-Y19m-cP6VUJAB7C"
          alt="Jane Doe"
          className="author-avatar"
        />
        <div className="author-info">
          <div className="badge author-badge">
            <BadgeCheck size={14} /> Featured Author
          </div>
          <h1>Jane Doe</h1>
          <p className="author-bio">
            Digital product designer and engineer exploring minimalist UI,
            design psychology, and the future of creative workflows. Passionate
            about building tools for developers.
          </p>
          <div className="author-socials">
            <a href="https://twitter.com/janedoe" className="social-link">
              <Twitter size={18} /> @janedoe
            </a>
            <a href="https://github.com/janedoe" className="social-link">
              <Github size={18} /> janedoe
            </a>
            <a href="https://linkedin.com/in/jane-doe" className="social-link">
              <Linkedin size={18} /> Jane Doe
            </a>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-head">
          <h2>Authored Posts</h2>
          <div className="badge subtle">
            <TrendingUp size={14} /> Top Rated
          </div>
        </div>
        <div className="article-grid">
          {/* {authorPosts.map((post) => (
            <ArticleCard key={post.title} article={post} />
          ))} */}
        </div>
      </section>
    </main>
  );
}

export default AuthorPage;
