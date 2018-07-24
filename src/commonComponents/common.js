import React from "react";

export function InputField({ fieldName, type = "text" }) {
  return (
    <div style={{ margin: "0 2%" }} className="field">
      <div className="control">
        <input
          name={fieldName}
          className="input"
          type={type}
          placeholder={fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
        />
      </div>
    </div>
  );
}

export function Hero({ title }) {
  return (
    <section className="hero is-white">
      <div className="hero-body">
        <div className="container" />
      </div>
    </section>
  );
}
