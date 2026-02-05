export const metadata = {
  title: "TrackWrite — Content Tracking for Developer Relations Teams",
  description: "Track content commitments, measure delivery, and keep your DevRel team accountable. Purpose-built for Developer Relations.",
  openGraph: {
    title: "TrackWrite — Content Tracking for DevRel",
    description: "Purpose-built content tracking for Developer Relations teams.",
    url: "https://www.trackwrite.io",
    siteName: "TrackWrite",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, fontFamily: "'IBM Plex Sans', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
