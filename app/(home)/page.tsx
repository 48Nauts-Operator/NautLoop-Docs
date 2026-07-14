export default function HomePage() {
  // Static export has no server redirects — meta refresh + JS replace, no interim UI.
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/docs" />
      <script dangerouslySetInnerHTML={{ __html: "window.location.replace('/docs');" }} />
      <p style={{ padding: 24 }}>
        <a href="/docs">Continue to the documentation →</a>
      </p>
    </>
  );
}
