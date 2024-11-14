// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer style={{ background: "#f9f9f9", padding: "20px", marginTop: "20px", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "800px", margin: "0 auto", color: "#333" }}>
        <div>
          <h3>Internesia</h3>
          <p>Kontak: (319) 555-0115</p>
          <p>Jl. Mayjen H.A, Swager Naga, Singaraja, Kabupaten Buleleng, Bali 81115</p>
        </div>
        <div>
          <h4>Quick Link</h4>
          <p><a href="/about">Tentang</a></p>
          <p><a href="/contact">Kontak</a></p>
        </div>
        <div>
          <h4>Pelamar</h4>
          <p><a href="/job">Cari Lowongan</a></p>
          <p><a href="/company-list">Telusuri Perusahaan</a></p>
          <p><a href="/candidate-dashboard">Dashboard Kandidat</a></p>
        </div>
        <div>
          <h4>Perusahaan</h4>
          <p><a href="/post-job">Posting Lowongan</a></p>
          <p><a href="/company-dashboard">Dashboard Perusahaan</a></p>
          <p><a href="/applicants">Lamar Masuk</a></p>
        </div>
      </div>
      <p>&copy; 2024 Internesia | Masukan Portal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
