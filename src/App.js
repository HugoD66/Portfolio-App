import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Accueil from "./components/section/Accueil";
import Competences from "./components/section/Competences";
import Portfolio from "./components/section/Portfolio";
import Cursus from "./components/section/Cursus";
import Contact from "./components/section/Contact";



export default function App() {

  return (
      <BrowserRouter>
          <Layout>
              <Routes>
                  <Route element={< Accueil />} path="/accueil-portfolio-hugo" />
                  <Route element={< Competences />} path="/compétences-portfolio-hugo" />
                  <Route element={< Portfolio />} path="/portfolio-hugo" />
                  <Route element={< Cursus />} path="/cursus-portfolio-hugo" />
                  <Route element={< Contact />} path="/contact-portfolio-hugo" />
              </Routes>
          </Layout>
      </BrowserRouter>
  )
};
