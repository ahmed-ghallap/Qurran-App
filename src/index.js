import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import { SearchEngin } from "./pages/search";
import { Zeker } from "./pages/zeker";
import { Qurran } from "./pages/qurran";
import { Why, Assma } from "./pages/why";
import { useLocation } from 'react-router-dom';

// export const URL = window.location.href;
// export const URL = window.location.href;
// console.log(URL)



export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="why" element={<Why />} />
          <Route path="assma" element={<Assma />} />
          <Route path="zeker" element={<Zeker />} />
          <Route path="search" element={<SearchEngin />} />
          <Route path="book" element={<Qurran />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
