// components/Sidebar.js
import React from "react";

const Sidebar = () => {
  return (
    <div style={{ width: "25%", paddingRight: "1px" }}>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        <li style={{ padding: "10px 0", color: "#333", fontWeight: "bold" }}>Isi Biodata Diri</li>
        <li style={{ padding: "10px 0", color: "#aaa" }}>Riwayat Pendidikan</li>
        <li style={{ padding: "10px 0", color: "#aaa" }}>Unggah Dokumen</li>
        <li style={{ padding: "10px 0", color: "#aaa" }}>Revisi</li>
      </ul>
    </div>
  );
};

export default Sidebar;
