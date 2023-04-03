import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

const App = () => {
  return (
    <>
      <Header></Header>
      <Main className="main"></Main>
      <Footer className="footer"></Footer>
    </>
  );
};

export default App;
