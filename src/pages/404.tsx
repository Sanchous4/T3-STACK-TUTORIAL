import Link from "next/link";

const Custom404 = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "1rem",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
        404 - Page Not Found
      </h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/" passHref>
        <button
          style={{
            textDecoration: "underline",
            color: "white",
            fontSize: "1.2rem",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          Return to home page
        </button>
      </Link>
    </div>
  );
};

export default Custom404;
