import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <main className="page-shell centered">
      <h1>Page not found</h1>
      <p>The page you requested does not exist in this blog demo.</p>
      <Link to="/" className="cta-btn">
        Go Home
      </Link>
    </main>
  );
}

export default NotFoundPage;
