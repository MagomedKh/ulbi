import { Link } from "react-router-dom";

import "./index.scss";
import { Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./components/pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./components/pages/MainPage/MainPage.async";
import { Suspense } from "react";

const App = () => {
   return (
      <div className="app">
         <Link to={"/"}>Главная</Link>
         <Link to={"/about"}>О сайте</Link>

         <Suspense fallback="Loading">
            <Routes>
               <Route path={"/about"} element={<AboutPageAsync />} />
               <Route path={"/"} element={<MainPageAsync />} />
            </Routes>
         </Suspense>
      </div>
   );
};

export default App;
