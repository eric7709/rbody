"use client";

export default function TestPage() {
  return (
    <div style={{ padding: 40 }}>
      <button
        onClick={() => alert("IT WORKED")}
        style={{
          fontSize: 24,
          padding: "20px 40px",
          background: "red",
          color: "white",
        }}
      >
        TAP ME
      </button>
    </div>
  );
}