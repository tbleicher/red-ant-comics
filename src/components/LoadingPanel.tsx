export function LoadingPanel({ isLoading }: { isLoading: boolean }) {
  if (!isLoading) return null;

  return <div style={{ padding: 10, textAlign: "center", width: "100%" }}>loading comics ...</div>;
}
