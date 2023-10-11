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
import "./assets/css/style.css";


function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //   },
  //   {
  //     path: "/home",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  // ]);

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
