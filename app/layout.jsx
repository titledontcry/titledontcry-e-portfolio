import './globals.css';

export const metadata = {
  title: 'Title Portfolio',
  description: 'Personal portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
