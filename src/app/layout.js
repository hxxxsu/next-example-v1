import "./globals.css";

export const metadata = {
  title: "Default title",
  description: "Default description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
