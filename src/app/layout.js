import localFont from 'next/font/local';
import "./globals.scss";

const proximaNova = localFont({
  name: "Proxima Nova",
  src: [
    {
      path: "./fonts/proximanova_light.woff2",
      weight: "200",
    },
    {
      path: "./fonts/proximanova_regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/proximanova_semibold.woff2",
      weight: "600",
    },
    {
      path: "./fonts/proximanova_bold.woff2",
      weight: "700",
    },
  ]
});

export const metadata = {
  title: "Clicky",
  description: "A website created for the Clicky interview process.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={proximaNova.className}>{children}</body>
    </html>
  );
}
