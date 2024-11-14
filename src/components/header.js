// components/Header.js
import React from "react";
import logo from "../assets/WhatsApp Image 2024-10-25 at 14.24.14_62856aae 2.png";

const Header = () => {
  return (
    <header
      style={{
        padding: "5px 0",
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid #ddd",
      }}
    >
      <img
        src={logo}
        alt="Internesia Logo"
        style={{ height: "50px", marginRight: "10px", marginLeft:"20px" }}
      />
      <h3 href="/" style={{ textDecoration: "none", color: "#333" }}>
        Internesia
      </h3>
      <a
          href="/job"
          style={{ marginRight: "20px", textDecoration: "none", color: "#333" , marginLeft:"40px"}}
        >
          Beranda
        </a>
        <a
          href="/job"
          style={{ marginRight: "20px", textDecoration: "none", color: "#333" }}
        >
          Cari Lowongan
        </a>
        <a
          href="/job"
          style={{ marginRight: "20px", textDecoration: "none", color: "#333" }}
        >
          Perusahaan
        </a>
      <div style={{ marginLeft: "auto", marginRight:"20px" }}>
        <a
          href="/job"
          style={{ marginRight: "20px", textDecoration: "none", color: "#333" }}
        >
          ID
        </a>
        <a href="/login" style={{ textDecoration: "none", color: "#333" }}>
          Masuk
        </a>
      </div>
    </header>
  );
};

export default Header;
