import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import SiteHeader from "./components/Site/SiteHeader";
import HomePage from "./Pages/home/HomePage";
import AuthorPage from "./Pages/authors/AuthorPage";
import CategoryPage from "./Pages/category/CategoryPage";
import PostDetailsPage from "./Pages/post-details/PostDetailsPage";
import NotFoundPage from "./Pages/notFound/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <main className="page-shell">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/authors/:authorSlug" element={<AuthorPage />} />
            <Route path="/categories" element={<CategoryPage />} />
            <Route path="/blog/:postSlug" element={<PostDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <SiteHeader />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
