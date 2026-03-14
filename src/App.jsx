import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import SiteHeader from "./components/Site/SiteHeader";
import HomePage from "./Pages/home/HomePage";
import CategoryPage from "./Pages/category/CategoryPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <main className="page-shell">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/categories" element={<CategoryPage />} />
          </Routes>
          <SiteHeader />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
