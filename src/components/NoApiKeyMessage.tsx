export function NoApiKeyMessage() {
  return (
    <main className="site-content">
      <div
        style={{
          alignItems: "center",
          display: "flex",
          height: "calc(100vh - 20px)",
          justifyContent: "center",
          width: "100%",
        }}
      >
        Please provide an API key and hash in src/services/apiSecrets.
      </div>
    </main>
  );
}
