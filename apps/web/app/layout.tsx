interface IRootLayoutProps {
  children: React.ReactNode;
}

function RootLayout({children}: IRootLayoutProps) {
  return <>{children}</>;
}

export default RootLayout;