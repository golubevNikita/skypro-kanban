// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import "./App.css";
import PopUser from "./components/PopUps/PopUser";
import PopNewCard from "./components/PopUps/PopNewCard";
import PopBrowse from "./components/PopUps/PopBrowse";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  // const [count, setCount] = useState(0);

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
