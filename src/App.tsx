import { Routes, Route } from "react-router-dom";
import Layout from "./route/Layout";
import Home from "./route/home";
import About from "./route/about";
import Opening from "./route/opening";
import Order from "./route/Order";

export default function App() {
  return (
    
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
          <Route path="/opening" element={<Opening />} />
        </Route>
      </Routes>
  );
}
