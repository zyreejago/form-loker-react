// App.js
import React from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Form from "./components/form";
import Footer from "./components/footer";

const App = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />
      <div style={{ display: "inline-flex", padding: "20px", maxWidth: "10000px", margin: "0 50px" }}>
        <Sidebar />
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default App;
