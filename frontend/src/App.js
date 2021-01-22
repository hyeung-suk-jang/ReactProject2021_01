import React from "react";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div>
      <Layout>
        <Header />
        <Main />
      </Layout>
    </div>
  );
}

export default App;
