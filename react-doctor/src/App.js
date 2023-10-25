import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom" ;
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import "./assets/icofont/icofont.min.css"
import "./assets/css/style.css";
import "./assets/bootstrap/css/bootstrap.min.css"


function App() {

  return (
    <div className="App top">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
