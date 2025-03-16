// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import "./App.css";
import PopUser from "./components/PopUps/PopUser/PopUser";
import PopNewCard from "./components/PopUps/PopNewCard/PopNewCard";
import PopBrowse from "./components/PopUps/PopBrowse/PopBrowse";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <div className="wrapper">
        <PopUser />
        <PopNewCard />
        <PopBrowse />

        <Header />
        <Main />
      </div>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
