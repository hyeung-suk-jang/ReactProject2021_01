import React from "react";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div>
      <Layout>
        <Header />
        <SearchBar />
      </Layout>
    </div>
  );
}

export default App;
