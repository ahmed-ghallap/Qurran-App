import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import  {SearchEngin} from "./pages/search";
import { Zeker } from "./pages/zeker";
import { Why, Assma } from "./pages/why";
// import NoPage from "./pages/NoPage";

export const URL = "192.168.12.1:5000/";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="why" element={<Why />} />
          <Route path="assma" element={<Assma />} />
          <Route path="zeker" element={<Zeker />} />
          <Route path="search" element={<SearchEngin  />} />
          {/* <Route path="zeker" element={<Zeker />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);