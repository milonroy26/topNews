import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BycategoryPage from "./pages/BycategoryPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="/category/:categoryId"
          element={<BycategoryPage></BycategoryPage>}
        ></Route>
        <Route
          path="/details/:detailsId"
          element={<BycategoryPage></BycategoryPage>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
