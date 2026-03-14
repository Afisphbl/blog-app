import { Bell, Search, SquarePen, UserCircle } from "lucide-react";
import "./SiteHeader.css";

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="brand">
        <SquarePen size={24} />
        <span>Blog Explorer</span>
      </div>

      <div className="top-nav">
        <span className="top-nav-link">Home</span>
        <span className="top-nav-link">Category</span>
        <span className="top-nav-link">Authors</span>
        <span className="top-nav-link">Latest</span>
      </div>

      <div className="header-actions">
        <button className="icon-btn">
          <Search size={20} />
        </button>
        <button className="icon-btn">
          <Bell size={20} />
        </button>
        <button className="icon-btn">
          <UserCircle size={20} />
        </button>
      </div>
    </header>
  );
}

export default SiteHeader;
