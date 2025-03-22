// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import "./App.css";
import PopUser from "./components/PopUps/PopUser/PopUser";
import PopNewCard from "./components/PopUps/PopNewCard/PopNewCard";
import PopBrowse from "./components/PopUps/PopBrowse/PopBrowse";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`;

// import GlobalStyle from "./App.styled";

function App() {
  return (
    <>
      {/* <GlobalStyle /> */}
      <Wrapper>
        <PopUser />
        <PopNewCard />
        <PopBrowse />

        <Header />
        <Main />
      </Wrapper>

      <script src="js/script.js"></script>
    </>
  );
}

export default App;
