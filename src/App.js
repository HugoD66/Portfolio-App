import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Accueil from "./components/section/Accueil";
import Competences from "./components/section/Competences";
import Portfolio from "./components/section/Portfolio";
import Cursus from "./components/section/Cursus";
import Contact from "./components/section/Contact";
import './App.css';

export default function App() {
  return (
      <BrowserRouter>
          <Layout>
              <Routes>
                  <Route element={< Accueil />} path="/"  />
                  <Route element={< Competences />} path="/compétences-hugo" />
                  <Route element={< Portfolio />} path="/portfolio-hugo" />
                  <Route element={< Cursus />} path="/cursus-hugo" />
                  <Route element={< Contact />} path="/contact-hugo" />
              </Routes>
          </Layout>
      </BrowserRouter>
  )
};
