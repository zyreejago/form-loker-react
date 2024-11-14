// src/components/Form.js
import React from "react";
import { inputStyle, buttonStyle, formContainerStyle } from "../style";
import logo from "../assets/image 5.png";

const Form = () => {
  return (
    <div style={{ width: "75%", boxSizing: "border-box" }}>
      {/* Company details section */}
      <div
        style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}
      >
        <img
          src={logo}
          alt="Company Logo"
          style={{ height: "50px", marginRight: "10px" }}
        />

        <h2 style={{ margin: "0" }}>Raycast Corp</h2>
      </div>
      <h2>Software Engineer</h2>
      <div
        style={{
          display: "flex",
          alignItems: "self-start",
          gap:"30px",
        }}
      >
        <p>Maluku</p>
        <p>Full Time</p>
        <p>5jt - 10jt</p>
      </div>

      {/* Form fields with border radius */}
      <div style={formContainerStyle}>
        <form>
          <label>Nama Lengkap</label>
          <input type="text" style={inputStyle} placeholder="Nama Lengkap" />

          <label>Alamat Email</label>
          <input type="email" style={inputStyle} placeholder="Alamat Email" />

          <label>Nomor Telepon</label>
          <input type="tel" style={inputStyle} placeholder="Nomor Telepon" />

          <label>Asal Kota</label>
          <input type="text" style={inputStyle} placeholder="Asal Kota" />

          <label>Informasi Tambahan</label>
          <textarea
            style={{ ...inputStyle, height: "100px", resize: "none" }}
            maxLength="500"
            placeholder="Tambahkan Surat Pengantar atau Informasi Lain yang Ingin Dibagikan"
          ></textarea>
          <small>0 / 500</small>

          <button type="submit" style={buttonStyle}>
            Next
          </button>
        </form>

        <p style={{ fontSize: "12px", marginTop: "20px", color: "#777" }}>
          By sending the request you confirm that you accept our{" "}
          <a href="/terms">Terms of Service</a> and{" "}
          <a href="/privacy">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default Form;
