import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Details from "./Pages/Details";
import { useEffect, useState } from "react";
import { ThemeContext } from "./components/context/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";

// import ProjectDetails from "./components/ProjectDetails/ProjectDetails";

function getInitialTheme() {
  const theme = localStorage.getItem("theme");
  return theme ? theme : "dark";
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <div className={`cont ${theme}-theme overflow-hidden`}>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                  }}
                />
              }
            />
            <Route
              path="/Details/:id"
              element={
                <Details
                  onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                  }}
                />
              }
            ></Route>
          </Routes>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;

// import './App.css'
// import { Route, Routes } from 'react-router-dom'
// import HomePage from './Pages/HomePage'
// import Details from './Pages/Details'
// // import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/Details/:id" element={<Details />}></Route>
//       </Routes>
//     </>
//   )
// }

// export default App
