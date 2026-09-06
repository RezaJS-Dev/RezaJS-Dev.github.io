import "./globals.css";

export const metadata = {
  title: "Reza.JS-Dev Portfolio",
  description: `Get in touch with me.
  Send feedback, ask questions, or report issues securely.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
