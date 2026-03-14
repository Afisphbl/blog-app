import { PenSquare, Search, Bell, UserCircle2 } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { navigationLinks } from "../../Data/blogData";
import "./SiteHeader.css";

function SiteHeader() {
  return (
    <header className="site-header">
      <Link to="/" className="brand">
        <PenSquare size={22} color="var(--acc-blue)" />
        <span>Blog Explorer</span>
      </Link>

      <nav className="top-nav" aria-label="Primary navigation">
        {navigationLinks.map((link) => (
          <NavLink
            key={link.to + link.label}
            to={link.to}
            className={({ isActive }) =>
              isActive ? "top-nav-link top-nav-link-active" : "top-nav-link"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="header-actions" aria-label="Header actions">
        <button className="icon-btn" aria-label="Search">
          <Search size={18} />
        </button>
        <button className="icon-btn" aria-label="Notifications">
          <Bell size={18} />
        </button>
        <button className="icon-btn" aria-label="Account">
          <UserCircle2 size={20} />
        </button>
      </div>
    </header>
  );
}

export default SiteHeader;
