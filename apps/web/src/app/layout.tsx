import './global.css';

interface IRootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-slate-500">{children}</body>
    </html>
  );
}

export default RootLayout;
