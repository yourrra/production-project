import { Route, Routes, Link } from "react-router-dom";
import { MainPageAsync } from "./page/MainPage/MainPage.async";
import { AboutPageAsync } from "./page/AboutPage/AboutPage.async";
import { Suspense } from "react";

import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to="./">Main</Link>
      <Link to="./about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
